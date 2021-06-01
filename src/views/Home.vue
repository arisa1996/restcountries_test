<template>
  <div class="home">
    <h1>使用JS,CSS,HTML 實作一個國家目錄！</h1>
    <div class="search">
      <input type="text" placeholder="請輸入國家" v-model="searchText" @keyup.13="searchCountry(searchText)">
      <button @click="searchCountry(searchText)">確認</button>
    </div>
    <div class="show-body">
      <button @click="getData()">正序顯示</button>
      <button @click="reverseSum()">倒序顯示</button>
    </div>
    <div class="loading vh-100" v-if="loading">Loading...</div>
    <div class="list" v-else>
      <ul class="list-body">
        <li v-for="item in pageContent" :key="item.numericCode" @click="openDetails(item.name, item.numericCode)">
          <div class="card">
            <img :src="item.flag" :alt="item.name">
            <div class="text-item">
              <h4>國家名稱: {{ item.name }}</h4>
              <p>2位國家代碼 : {{ item.alpha2Code }}</p>
              <p>3位國家代碼 : {{ item.alpha3Code }}</p>
              <p>母語名稱: {{ item.nativeName }}</p>
              <p>替代國家名稱: <br><span v-for="(altSpelling, idx) in item.altSpellings" :key="idx">{{ altSpelling }}<br></span></p>
              <p>國際電話區號: <span v-for="(callingCode, idx) in item.callingCodes" :key="idx">{{ callingCode }}<br></span></p>
            </div>
          </div>
        </li>
      </ul>
      <!-- 分頁 -->
      <ul class="currentPage">
        <li class="page-item" :class="{'active':item === currentPage}" v-for="item in page" :key="item">
          <a class="page-link" href="#" @click.prevent="changePage(item)">{{ item }}</a>
        </li>
      </ul>
      <div v-if="isPopup" class="vue-popUpSmall">
        <h5>{{ modelData.name }} 詳細資訊</h5>
        <p>area: {{ modelData.area }}</p>
        <p>capital: {{ modelData.capital }}</p>
        <p>cioc: {{ modelData.cioc }}</p>
        <p>demonym: {{ modelData.demonym }}</p>
        <p>languages: <span v-for="(language, idx) in modelData.languages" :key="idx">{{ language.name }}<br></span></p>
        <p>latlng: <span v-for="(latlng, idx) in modelData.latlng" :key="idx">{{ latlng }}<br></span></p>
        <p>numericCode: {{ modelData.numericCode }}</p>
        <p>population: {{ modelData.population }}</p>
        <p>region: {{ modelData.region }}</p>
        <p>subregion: {{ modelData.subregion }}</p>
        <div class="popUp-buttons">
          <button @click="cancelPopUp()">關閉</button>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      loading: false,
      countriydata: [],
      searchText: '',
      modelData: {},
      isPopup: false,
      currentPage: 1,
      pageContent: [], // 過濾後存放資料的地方
      page: 0
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      const api = 'https://restcountries.eu/rest/v2/all'
      this.loading = true
      this.$http.get(api).then(res => {
        const data = res.data
        this.page = data.length / 25// 計算出這筆資料有幾頁
        this.pageContent = data.filter((item, index) => {
          return index < 25
        })
        this.countriydata = data
        this.loading = false
      }).catch(err => {
        console.log(err)
        this.loading = false
      })
    },
    searchCountry (searchText) {
      if (searchText) {
        const filterSearch = this.countriydata.filter(data => {
          return (data.name.search(searchText) !== -1)
        })
        this.pageContent = filterSearch
        this.searchText = ''
        return this.countriydata
      } else {
        return alert('請輸入正確關鍵字')
      }
    },
    reverseSum () {
      return this.countriydata.reverse()
    },
    openDetails (countryName, code) {
      if (code) {
        const api = `https://restcountries.eu/rest/v2/name/${countryName}`
        this.$http.get(api).then(res => {
          const data = res.data[0]
          this.modelData = data
          this.isPopup = !this.isPopup
        }).catch(err => {
          console.log(err)
        })
      }
    },
    cancelPopUp () {
      this.isPopup = false
    },
    changePage (page = 1) { // 頁數預設是在第一頁
      this.currentPage = page
      this.pageContent = this.countriydata.filter((item, index) => {
        return index < page * 25 && index >= (page - 1) * 25
        // 如果是第一頁就回傳 0~24 筆的資料
        // 第二頁就是 25~49 筆的資料
      })
    }
  }
}
</script>

<style lang="scss">
.loading{
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  margin: auto;
  z-index: 999;
  text-align: center;
}
button{
  width: 60px;
  height: 30px;
  margin-left: 10px;
  border:0;
  color:#fff;
  border-radius: 5px;
  cursor:pointer;
}
.search{
  input{
    padding:5px 15px; border:2px black solid;
    cursor:pointer;
    -webkit-border-radius: 5px;
    border-radius: 5px;
  }
  button{
    background-color:#003C9D;
  }
}
.show-body{
  margin: 20px 0px;
  button{
    width: 80px;
    background-color:rgba(42, 42, 180, 0.867);
  }
}
ul{
  list-style-type: none;
  padding-inline-start: 0px;
  display: flex;
}
.list-body{
  flex-wrap: wrap;
  justify-content: space-between;
  li{
    width: 24.99%;
    margin: 10px 5px;
    cursor: pointer;
  }
}
.currentPage {
  justify-content: center;
  li{
    margin: 20px;
  }
}
.vue-popUpSmall {
  position: fixed;
  width: 25%;
  height: 70%;
  background-color: #f0e4e4;
  border: 2px solid #b9b9b9;
  padding: 5px;
  top: 20%;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 1;
  button{
    width: 80%;
    background-color: blue;
  }
}
.card{
  padding: 10px;
  border: 1px solid #eee;
  img{
    width: 100%;
    height: 47%;
  }
  .text-item{
    height: 52%;
  }
}
</style>
