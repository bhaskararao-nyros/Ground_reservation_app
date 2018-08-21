<template>
	<div>
	<HeaderComponent />
	<SidebarComponent />
	<notifications group="foo" />
<!-- content start -->
<div class="tot_cntnt">
	<div class="container">
	<!-- parks section start -->
	<div class="admin_sctn">
	<!-- parks list header start -->
		<div class="admin_hdr row">
			<div class="col-md-4 col-xs-3"><h2>Name</h2></div>
			<div class="col-md-4 col-xs-3"><h2>Address</h2></div>
			<div class="col-md-2 col-xs-3"><h2>Website</h2></div>
		</div>
		<!-- parks list header end -->
		
		<!-- parks list start -->
		<div class="admin_lst row" v-for="park in parks" :key="park._id">
			<!-- parks name start -->
			<div class="col-md-4 col-xs-3"><h3>{{ park.name }}</h3></div>
			<!-- parks name end -->

			<!-- parks address start -->
			<div class="col-md-4 col-xs-3"><h3>{{ park.address }}</h3></div>
			<!-- parks address end -->

			<!-- parks website start -->
			<div class="col-md-2 col-xs-3"><h3>{{ park.website }}</h3></div>
			<!-- parks website end -->

			<div class="col-md-2 col-xs-3">
				<div class="lst_actns">
					<!-- delete icon start -->
					<a href="#" @click="deletePark(park._id)" class="lst_dlt_icn" data-toggle="modal" data-target="#deleteGroup"><img src="../assets/img/delete_icon.png" /></a>
					<!-- delete icon end -->
					<!-- edit icon start -->
					<a href="#" @click="editPark(park)" class="lst_edit_icn" data-toggle="modal" data-target="#editGround"><img src="../assets/img/edit_icon.png" /></a>
					<!-- edit icon end -->
				</div>
			</div>
		</div>
		<!-- parks list end -->
		
	</div>	
	<!-- parks section end -->
		<!-- add ground btn start -->
		<a href="#" class="add_grnd_btn" data-toggle="modal" data-target="#addGround"><img src="../assets/img/plus_icon.png" /></a>
		<!-- add ground btn end -->
	</div>
</div>
<!-- content end -->

	<!-- Add Park modal start -->
	<div class="modal fade add_slot_modal bs-example-modal-sm" id="addGround" tabindex="-1" role="dialog" aria-labelledby="addGroundLabel">
	  <div class="modal-dialog modal-sm" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	        	<img src="../assets/img/close_icon.png" />
	        </button>
	        <h4 class="modal-title" id="addGroundLabel">Add Park</h4>
	      </div>
	      <form ref="add_park_form" @submit.prevent="addPark">
		      <div class="modal-body">
				<div class="add_slot_tabs add_grund">						
				<!-- Tab panes -->
					<div class="add_slot_cntnt add_grund_cntnt">
						<div class="row">
							<div class="col-md-12">
								<div class="form-group has-feedback">
									<input type="text" name="park_name" v-model="park.park_name" class="form-control" placeholder="Park Name">
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								<div class="form-group has-feedback">
									<input type="text" name="park_address" v-model="park.park_address" class="form-control" placeholder="Address">
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								<div class="form-group has-feedback">
									<input type="text" name="park_website" v-model="park.park_website" class="form-control" placeholder="Website Url">
								</div>
							</div>
						</div>
					</div>
				</div>
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-default cncel_btn" data-dismiss="modal" ref="close_add_modal">
		        	<img src="../assets/img/cancel_icon.png" />
		        </button>
		        <button type="submit" class="btn btn-primary save_btn">
		        	<img src="../assets/img/save_icon.png" />
		        </button>
		      </div>
		    </form>
	    </div>
	  </div>
	</div>
	<!-- Add Park modal end -->

	<!-- Edit Park modal start -->
	<div class="modal fade add_slot_modal bs-example-modal-sm" id="editGround" tabindex="-1" role="dialog" aria-labelledby="addGroundLabel">
	  <div class="modal-dialog modal-sm" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	        	<img src="../assets/img/close_icon.png" />
	        </button>
	        <h4 class="modal-title" id="addGroundLabel">Edit Park</h4>
	      </div>
	      <form ref="edit_park_form" @submit.prevent="updatePark">
		      <div class="modal-body">
				<div class="add_slot_tabs add_grund">						
				<!-- Tab panes -->
					<div class="add_slot_cntnt add_grund_cntnt">
						<div class="row">
							<div class="col-md-12">
								<div class="form-group has-feedback">
									<input type="text" name="edit_park_name" v-model="edit_park_name" class="form-control" placeholder="Park Name">
													<input type="hidden" name="edit_park_id" v-model="edit_park_id">
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								<div class="form-group has-feedback">
									<input type="text" name="edit_park_address" v-model="edit_park_address" class="form-control" placeholder="Address">
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								<div class="form-group has-feedback">
									<input type="text" name="edit_park_website" v-model="edit_park_website" class="form-control" placeholder="Website Url">
								</div>
							</div>
						</div>
					</div>
				</div>
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-default cncel_btn" data-dismiss="modal" ref="close_edit_modal">
		        	<img src="../assets/img/cancel_icon.png" />
		        </button>
		        <button type="submit" class="btn btn-primary save_btn">
		        	<img src="../assets/img/save_icon.png" />
		        </button>
		      </div>
		    </form>
	    </div>
	  </div>
	</div>
	<!-- Edit Park modal end -->

	<!-- Delete park modal start -->
	<div class="modal fade dlt_grund_modal bs-example-modal-sm" id="deleteGroup" tabindex="-1" role="dialog" aria-labelledby="deleteGroundLabel">
	  <div class="modal-dialog modal-sm" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	        	<img src="../assets/img/close_icon.png" />
	        </button>
	        <h4 class="modal-title" id="deleteGroundLabel">Delete Park</h4>
	      </div>
		    <div class="modal-body">
		      <div class="dlt_grund_cntnt">
		      	<p>There are 6 active reservations in this park</p>
						<div class="dlt_grund_slct">
							<input id="radio1" name="radio" value="false" type="radio" checked="checked">
							<label for="radio1"></label>
							<p>Delete reservations and park</p>
						</div>
						<div class="dlt_grund_slct">
							<input id="radio1" name="radio" value="false" type="radio">
							<label for="radio1"></label>
							<p>Only delete park (Doesn’t impact current reservations, no future requests will be allowed)</p>
						</div>
		      </div>
		    </div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default cncel_btn" data-dismiss="modal" ref="close_del_modal">
					<img src="../assets/img/cancel_icon.png" />
					</button>
					<button type="button" class="btn btn-primary save_btn" @click="deleteParkFun()">
					<img src="../assets/img/save_icon.png" />
					</button>
				</div>
	    </div>
	  </div>
	</div>
	<!-- Delete park modal end -->
	</div>
</template>

<script>

import HeaderComponent from '@/components/Header'
import SidebarComponent from '@/components/Sidebar'
import AppService from '@/services/AppService'

export default {
  data() {
    return {
      park:{},
      parks:[],
      edit_park_name:'',
      edit_park_address:'',
      edit_park_website:'',
      edit_park_id:'',
      del_park_id:''
    }
  },
  name: 'Parks',
  props: {
    
  },
  methods: {
  	async getParks () {
      const res = await AppService.getParks()
      console.log('parks @@@', res.data)
      this.parks = res.data.data
		},
    async addPark () {
      const res = await AppService.addPark(this.park)
      console.log('add park @@@', res.data)
      if (res.data.status === 'success') {
      	this.parks.push(res.data.data)

      	this.$notify({
		      group: 'foo',
		      type:'success',
		      text: res.data.message
		    });
      } else {
      	this.$notify({
		      group: 'foo',
		      type:'error',
		      text: res.data.message
		    });
      }
      this.$refs.close_add_modal.click()
		},
		editPark (obj) {
			this.edit_park_id = obj._id;
			this.edit_park_name = obj.name
			this.edit_park_address = obj.address
			this.edit_park_website = obj.website
		},
		async updatePark () {
			let data = {_id:this.edit_park_id, name: this.edit_park_name, address: this.edit_park_address, website: this.edit_park_website}
			const res = await AppService.updatePark(data)
			if (res.data.status === 'success') {
				this.parks = res.data.data
				this.$notify({
		      group: 'foo',
		      type:'success',
		      text: 'Park updated successfully'
		    });
			}
			this.$refs.close_edit_modal.click()
		},
		deletePark (id) {
			this.del_park_id = id;
		},
		async deleteParkFun () {
			let data = {id:this.del_park_id}
			const res = await AppService.deletePark(data)
			if (res.data.status === 'success') {
				this.parks = res.data.data
				this.$notify({
		      group: 'foo',
		      type:'success',
		      text: 'Park deleted successfully'
		    });
			}
			this.$refs.close_del_modal.click()
		}
  },
  mounted () {
  	this.getParks()
  },
  components: {
    HeaderComponent,
    SidebarComponent
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>