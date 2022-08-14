export default {
 namespaced: true,
 state: {
  title:'Quản lí sản phẩm',
  dataTable: [
     {
         date: '2016-05-03',
         name: 'hihih',
         address: 'No. 189, Grove St, Los Angeles'
     }, 
     {
         date: '2016-05-02',
         name: 'asdasd',
         address: 'No. 189, Grove St, Los Angeles'
     }, 
     {
         date: '2016-05-04',
         name: 'Tomasdasd',
         address: 'No. 189, Grove St, Los Angeles'
     }, 
     {
         date: '2016-05-01',
         name: 'sadadasdasd ',
         address: 'No. 189, Grove St, Los Angeles'
     }
          ],
 },
 getters: {
   // Khai báo getters
 },
 mutations: {
   // Khai báo mutations
   increase (state,title) {
    state.title = title
  },
 },
}





