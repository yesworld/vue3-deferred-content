import { defineComponent } from 'vue/dist/vue.esm-bundler'

export default defineComponent({
  emits: ['leave', 'enter', 'change', 'disconnect'],
  name: 'deferred',

  template: `
    <div class="placeholder">
      <slot v-if="hidden"></slot>
    </div>
  `,

  data: () => ({
    observer: null,
    loaded: false,
  }),

  props: {
    hideContent: {
      type: Boolean,
      default: false,
    },
    once: {
      type: Boolean,
      default: false,
    },
    threshold: {
      type: [Array, Number],
      default: 0,
    },
    root: {
      type: Object,
      default: null,
    },
    rootMargin: {
      type: String,
      default: '0px 0px 0px 0px',
    }
  },

  computed: {
    hidden(): boolean {
      return this.hideContent ? this.loaded : true
    }
  },

  mounted() {
    const option = {
      threshold: this.threshold,
      rootMargin: this.rootMargin,
    }

    if (this.root !== null) {
      option['root'] = this.root
    }

    this.observer = new IntersectionObserver(this.onElementObserved, option)
    this.observer.observe(this.$el)
  },

  unmounted() {
    this.$emit('disconnect')
    this.observer.disconnect()
  },

  methods: {
    onElementObserved(entries: IntersectionObserverEntry[]) {
      entries.forEach(({ target, isIntersecting }) => {

        this.$emit('change', target)

        if (this.hideContent) {
          this.loaded = isIntersecting
        }

        if (isIntersecting) {
          this.$emit('enter', target)

          if (this.once) {
            return this.observer.unobserve(target)
          }
        } else {
          this.$emit('leave', target)
        }
      })
    },
  },

})