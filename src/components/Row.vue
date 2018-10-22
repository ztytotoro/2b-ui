<script lang="ts">
import { FunctionalVue, Component, Prop } from "vue-class-decorator";

@Component({
  name: "tb-row"
})
export default class Row extends FunctionalVue {
  @Prop(String)
  private align!: string;
  @Prop({ type: String, default: "8px" })
  private padding!: string;

  private render(h: any, context: any) {
    return h(
      "div",
      {
        class: ["tb-row"],
        style: GetStyle(context.props)
      },
      this.$slots.default
    );
  }
}

function GetStyle(props: any) {
  const t: any = {};
  if (props.align === "aside") {
        t.justifyContent = "space-between";
      } else if (props.align === "space-around") {
        t.justifyContent = "space-around";
      } else if (props.align === "center") {
        t.justifyContent = "center";
      } else if (props.align) {
        t.justifyContent = props.align;
      }
  if (props.padding) {
        t.padding = props.padding;
      }
  return t;
}
</script>

<style lang="less" scoped>
.tb-row {
    padding: 8px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
}
</style>

