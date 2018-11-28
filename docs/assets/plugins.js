Vue.component('i-table', {
  name: 'i-table',
  props: {
    columns: Array,
    items: {
      type: Array
    },
    showLevel: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      initItems: [] //处理后数据数组
    }
  },
  mounted() {
    if (this.items) {
      this.initData(this.deepCopy(this.items), 1, null)
    }
  },
  methods: {
    renderHeader(column, $index) {
      return column.title || '#'
    },
    renderBody(row, column, index) {
      return row[column.key]
    },
    toggleExpanded (item) {
      item.expanded = !item.expanded
      // 如果是折叠,需要隐藏子元素和孙元素
      this.changeShow(item._id,item.expanded)
    },
    changeShow (parentId,isShow) {
      this.initItems.forEach((_item,_index)=>{
        if(_item.parentId === parentId) {
          Vue.set(this.initItems[_index],'isShow',isShow)
          // 如果是隐藏的话,还得隐藏孙元素
          if(!isShow && _item.children && _item.children.length) {
            _item.expanded = false
            this.changeShow(_item._id,isShow)
          }
        }
      })
    },
    initData(items, level, parent) {
      let spaceHtml = ''
      for (let i = 1; i < level; i++) {
        spaceHtml += '<i class="i-space"></i>'
      }
      items.forEach((item, index) => {
        const isShow = level > this.showLevel ? false : true
        item = Object.assign({}, item, {
          _id: this.initItems.length,
          isShow,
          expanded: (item.children && (level + 1) <= this.showLevel) ? true : false,
          parentId: (parent&&parent._id) || 0,
          level: level,
          spaceHtml: spaceHtml
        })
        this.initItems.push(item)
        if (item.children) {
          this.initData(item.children, level + 1, item)
        }
      })
    },
    type(obj) {
      var toString = Object.prototype.toString
      var map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
      }
      return map[toString.call(obj)]
    },
    deepCopy(data) {
      var t = this.type(data),
        o,
        i,
        ni
      if (t === 'array') {
        o = []
      } else if (t === 'object') {
        o = {}
      } else {
        return data
      }
      if (t === 'array') {
        for (i = 0, ni = data.length; i < ni; i++) {
          o.push(this.deepCopy(data[i]))
        }
        return o
      } else if (t === 'object') {
        for (i in data) {
          o[i] = this.deepCopy(data[i])
        }
        return o
      }
    }
  },
  template: `
    <div>
    	<table class="autoTable">
      	<thead>
        	<tr>
          	<th v-for="(column,index) in columns">
            	{{ renderHeader(column, index) }}
            </th>
          </tr>
        </thead>
        <tbody>
        	<tr v-for="(item,index) in initItems" v-show="item.isShow">
          	<td v-for="column in columns">
              <i v-if="column.indent" v-html="item.spaceHtml"></i>
              {{renderBody(item,column) }}
              <i class="iconfont"
                :class="{'icon-plus-circle':!item.expanded,'icon-minus-circle':item.expanded }"
                v-if="column.indent && item.children"
                @click="toggleExpanded(item,index)"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
