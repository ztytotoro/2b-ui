<script lang="ts">
import { Vue, Component, Prop } from "vue-class-decorator";

@Component({
  name: "tb-row"
})
export default class Row extends Vue {
  @Prop(String)
  private align!: string;
  @Prop({ type: String, default: "8px" })
  private padding!: string;

  private render(h: any) {
    return h(
      "div",
      {
        class: ["hy-row"],
        style: this.style
      },
      this.$slots.default
    );
  }

  private get style() {
    const t: any = {};
    if (this.align === "aside") {
      t.justifyContent = "space-between";
    } else if (this.align === "space-around") {
      t.justifyContent = "space-around";
    } else if (this.align === "center") {
      t.justifyContent = "center";
    } else if (this.align) {
      t.justifyContent = this.align;
    }
    if (this.padding) {
      t.padding = this.padding;
    }
    return t;
  }
}
</script>

<style lang="less" scoped>
.hy-row {
    padding: 8px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
}
</style>

