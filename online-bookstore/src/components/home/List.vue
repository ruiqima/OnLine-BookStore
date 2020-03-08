<template>
  <a-list itemLayout="horizontal"
          :dataSource="data"
          style="background-color:white;display:flex;justify-content:flex-start;">

    <a-list-item slot="renderItem"
                 slot-scope="item, index">
      <span>{{index}}</span>
      {{item}}</a-list-item>

  </a-list>
</template>


<script>
const data = [
  'Racing car ',
  'Japanese ',
  'Australian walks ',
  'Man charged ',
  'Los Angeles ',
]
export default {
  data () {
    return {
      data,
    }
  },
}
</script>

<style>
</style>
