<template>
    <div class="shell">
        <div class="pagination">
            <button class="prev btn" :disabled="currentPage === 1" @click="Prev">上一页</button>
            <span class="more" v-if="pages[0] !== 1 && total > 0">...</span>
            <button class="btn" v-for="page in pages" :key="page" :class="page === currentPage ? 'btn-active' : ''" @click="Page(page)">{{page}}</button>
            <span class="more" v-if="pages[pages.length - 1] !== total && total > 0">...</span>
            <button class="next btn" :disabled="currentPage === total || total === 0" @click="Next">下一页</button>
        </div>
        <span class="total">共<span class="total-num">{{total}}</span>页</span>
        <div class="jump">
            <span class="span">到第</span>
            <input class="input" type="text" v-model.number="jumpPage"/>
            <span class="span">页</span>
            <button class="confirm" @click="Jump">确定</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-class-decorator";

@Component
export default class Pagination extends Vue {
  @Prop() private total!: number;
  private currentPage: number = 1;
  private jumpPage: number = 1;
  private frezze: boolean = false;

  public get pages() {
      const result = [];
      const start = Math.floor((this.currentPage - 1) / 10) * 10 + 1;
      for (let i = 0; i < 10; i++) {
          if ((start + i) <= this.total) {
              result.push(start + i);
          }
      }
      return result;
  }

  public Jump() {
      this.frezze = false;
      this.currentPage = this.jumpPage;
  }

  public Next() {
      this.frezze = false;
      this.currentPage = Math.min(this.currentPage + 1, this.total);
  }

  public Prev() {
      this.frezze = false;
      this.currentPage = Math.max(this.currentPage - 1, 1);
  }

  public Page(page: number) {
      this.frezze = false;
      this.currentPage = page;
  }

  public Reset() {
      this.frezze = true;
      this.currentPage = 1;
  }

  @Watch("currentPage")
  private Call() {
      if (this.frezze) return;
      this.$emit("change", this.currentPage);
  }
}
</script>

<style lang="less" scoped>
@border-color: rgb(202, 202, 202);
.shell {
    display: flex;
    align-items: center;
}

.pagination,.jump {
    display: flex;
    align-items: center;
}

.btn,.confirm {
    background-color: white;
    border: 1px solid @border-color;
    height: 32px;
    padding: 0 10px;
    outline: none;
    &:hover {
        background-color: #448fff;
        cursor: pointer;
        color: white;
        border-color: #448fff;
        position: relative;
    }
    &:disabled {
        cursor: default;
        border-color: rgb(243, 243, 243);
        background-color: rgb(243, 243, 243);
        color: rgb(61, 61, 61);
    }
}

.btn-active {
    background-color: #448fff;
    color: white;
    border-color: #448fff;
    position: relative;
    cursor: default;
}

.btn+.btn {
    margin-left: -1px;
}

.input {
    height: 32px;
    border: 1px solid @border-color;
    width: 25px;
    line-height: 25px;
    margin: 0 3px;
    outline: none;
    padding: 0 4px;
    text-align: center;
}

.more {
    font-size: 22px;
    margin: 0 8px;
}

.total {
    margin: 12px;
}

.total-num {
    font-weight: 600;
}

.span {
    line-height: 36px;
}

.confirm {
    margin-left: 20px;
}
</style>