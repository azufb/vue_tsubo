var app = new Vue({
  el: '#app',
  data: {
    // dataオプションに定義したプロパティの値が、HTML内の{{プロパティ}}部分に入る。
    products: [
      {code: 'A01', name: 'プロダクトA'},
      {code: 'B01', name: 'プロダクトB'},
      {code: 'C01', name: 'プロダクトC'}
    ]
  }
});