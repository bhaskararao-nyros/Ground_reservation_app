import Api from '@/services/Api'

export default {
  addPark (params) {
    return Api().post('/add_park', params)
  },
  getParks () {
    return Api().get('/get_parks')
  },
  updatePark (params) {
    return Api().post('/update_park', params)
  },
  deletePark (params) {
    return Api().post('/delete_park', params)
  }
}