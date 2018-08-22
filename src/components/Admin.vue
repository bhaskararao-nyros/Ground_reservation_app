<template>
	<div>
	<HeaderComponent />
	<SidebarComponent />
	<notifications group="foo" />
<!-- content start -->
<div class="tot_cntnt">
	<div class="container">
	<!-- admin section start -->
	<div class="admin_sctn">
	<!-- admin list header start -->
		<div class="admin_hdr row">
			<div class="col-md-3 col-xs-3"><h2>Name</h2></div>
			<div class="col-md-3 col-xs-2"><h2>Email</h2></div>
			<div class="col-md-2 col-xs-2"><h2>Phone</h2></div>
			<div class="col-md-2 col-xs-3"><h2>Admin</h2></div>
		</div>
		<!-- admin list header end -->
		
		<!-- admin list start -->
		<div class="admin_lst row" v-for="admin in admins" 
		:key="admin._id">
			<!-- admin name start -->
			<div class="col-md-3 col-xs-3"><h3>{{ admin.fname }} {{ admin.lname }}</h3></div>
			<!-- admin name end -->

			<!-- admin email start -->
			<div class="col-md-3 col-xs-2"><h3>{{ admin.email }}</h3></div>
			<!-- admin email end -->

			<!-- admin phone start -->
			<div class="col-md-2 col-xs-2"><h3>{{ admin.phone }}</h3></div>
			<!-- admin phone end -->

			<!-- admin status start -->
			<div class="col-md-2 col-xs-2">
				<h3>{{ admin.type.toString() }}</h3>
			</div>
			<!-- admin status end -->

			<div class="col-md-2 col-xs-3">
			<div class="lst_actns">
				<!-- delete icon start -->
				<a href="#" @click="deleteAdmin(admin._id)" class="lst_dlt_icn" data-toggle="modal" data-target="#deleteGroup"><img src="../assets/img/delete_icon.png" /></a>
				<!-- delete icon end -->
				<!-- edit icon start -->
				<a href="#" @click="editAdmin(admin)" class="lst_edit_icn" data-toggle="modal" data-target="#editAdmin"><img src="../assets/img/edit_icon.png" /></a>
				<!-- edit icon end -->
			</div>
			</div>
		</div>
		<!-- admin list end -->
	</div>	
	<!-- admin section end -->
		<!-- add ground btn start -->
		<a href="#" class="add_grnd_btn" data-toggle="modal" data-target="#addGround"><img src="../assets/img/plus_icon.png" /></a>
		<!-- add ground btn end -->
	</div>
</div>
<!-- content end -->

				<!-- Add Admin modal start -->
				<div class="modal fade add_slot_modal bs-example-modal-sm" id="addGround" tabindex="-1" role="dialog" aria-labelledby="addGroundLabel">
				  <div class="modal-dialog modal-sm" role="document">
				  <form>
				    <div class="modal-content">
				      <div class="modal-header">
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
				        	<img src="../assets/img/close_icon.png" />
				        </button>
				        <h4 class="modal-title" id="addGroundLabel">Add Admin</h4>
				      </div>
				      <div class="modal-body">
						<div class="add_slot_tabs add_grund">						

						<!-- Tab panes -->
						<div class="add_slot_cntnt add_grund_cntnt">
								<div class="row">
								<div class="col-md-12">
								<div class="form-group has-feedback">
								<input type="text" class="form-control" v-model="admin.fname" placeholder="First Name">
								</div>
								</div>
								</div>
								<div class="row">
								<div class="col-md-12">
								<div class="form-group has-feedback">
								<input type="text" class="form-control" v-model="admin.lname" placeholder="Last Name">
								</div>
								</div>
								</div>
								<div class="row">
								<div class="col-md-12">
								<div class="form-group has-feedback">
								<input type="text" class="form-control" v-model="admin.uname" placeholder="User Name">
								</div>
								</div>
								</div>
								<div class="row">
								<div class="col-md-12">
								<div class="form-group has-feedback">
								<input type="text" class="form-control" v-model="admin.phone" placeholder="Phone Number">
								</div>
								</div>
								</div>
								<div class="row">
								<div class="col-md-12">
								<div class="form-group has-feedback">
								<input type="text" class="form-control" v-model="admin.email" placeholder="Email">
								</div>
								</div>
								</div>

								<div class="row">
									<div class="admn_check">
									<ul class="admn_chck_box">
									<li>
									<div class="check_div">
									<input type="checkbox" id="adminCheck1" v-model="admin.type" name="City Admin" value="City Admin" checked="checked">
									<label for="adminCheck1"></label>
									</div>
									<span>City Admin</span>
									</li>

									<li>
									<div class="check_div">
									<input type="checkbox" id="adminCheck2" v-model="admin.type" name="Ground Admin" value="Ground Admin">
									<label for="adminCheck2"></label>
									</div>
									<span>Ground Admin</span>
									</li>

									<li>
									<div class="check_div">
									<input type="checkbox" id="adminCheck3" v-model="admin.type" name="Information Admin" value="Information Admin">
									<label for="adminCheck3"></label>
									</div>
									<span>Information Admin</span> 
									</li>

									</ul>
									</div>
								</div>
						</div>
						</div>
				      </div>
				      <div class="modal-footer">
				        <button type="button" class="btn btn-default cncel_btn" data-dismiss="modal" ref="close_add_modal">
				        	<img src="../assets/img/cancel_icon.png" />
				        </button>
				        <button type="button" class="btn btn-primary save_btn" @click="addAdmin">
				        	<img src="../assets/img/save_icon.png" />
				        </button>
				      </div>
				    </div>
				    </form>
				  </div>
				</div>
				<!-- Add Admin modal end -->

				<!-- Edit Admin modal start -->
				<div class="modal fade add_slot_modal bs-example-modal-sm" id="editAdmin" tabindex="-1" role="dialog" aria-labelledby="addGroundLabel">
				  <div class="modal-dialog modal-sm" role="document">
				  <form>
				    <div class="modal-content">
				      <div class="modal-header">
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
				        	<img src="../assets/img/close_icon.png" />
				        </button>
				        <h4 class="modal-title" id="addGroundLabel">Edit Admin</h4>
				      </div>
				      <div class="modal-body">
						<div class="add_slot_tabs add_grund">						

						<!-- Tab panes -->
						<div class="add_slot_cntnt add_grund_cntnt">
								<div class="row">
								<div class="col-md-12">
								<div class="form-group has-feedback">
								<input type="text" class="form-control" v-model="admin.fname" placeholder="First Name">
								</div>
								</div>
								</div>
								<div class="row">
								<div class="col-md-12">
								<div class="form-group has-feedback">
								<input type="text" class="form-control" v-model="admin.lname" placeholder="Last Name">
								</div>
								</div>
								</div>
								<div class="row">
								<div class="col-md-12">
								<div class="form-group has-feedback">
								<input type="text" class="form-control" v-model="admin.uname" placeholder="User Name">
								</div>
								</div>
								</div>
								<div class="row">
								<div class="col-md-12">
								<div class="form-group has-feedback">
								<input type="text" class="form-control" v-model="admin.phone" placeholder="Phone Number">
								</div>
								</div>
								</div>
								<div class="row">
								<div class="col-md-12">
								<div class="form-group has-feedback">
								<input type="text" class="form-control" v-model="admin.email" placeholder="Email">
								</div>
								</div>
								</div>

								<div class="row">
									<div class="admn_check">
									<ul class="admn_chck_box">
									<li>
									<div class="check_div">
									<input type="checkbox" id="adminCheck1" v-model="admin.type" name="City Admin" value="City Admin" checked="checked">
									<label for="adminCheck1"></label>
									</div>
									<span>City Admin</span>
									</li>

									<li>
									<div class="check_div">
									<input type="checkbox" id="adminCheck2" v-model="admin.type" name="Ground Admin" value="Ground Admin">
									<label for="adminCheck2"></label>
									</div>
									<span>Ground Admin</span>
									</li>

									<li>
									<div class="check_div">
									<input type="checkbox" id="adminCheck3" v-model="admin.type" name="Information Admin" value="Information Admin">
									<label for="adminCheck3"></label>
									</div>
									<span>Information Admin</span> 
									</li>

									</ul>
									</div>
								</div>
						</div>
						</div>
				      </div>
				      <div class="modal-footer">
				        <button type="button" class="btn btn-default cncel_btn" data-dismiss="modal" ref="close_edit_modal">
				        	<img src="../assets/img/cancel_icon.png" />
				        </button>
				        <button type="button" class="btn btn-primary save_btn" @click="updateAdmin">
				        	<img src="../assets/img/save_icon.png" />
				        </button>
				      </div>
				    </div>
				    </form>
				  </div>
				</div>
				<!-- Edit Admin modal end -->

				<!-- Delete Ground modal start -->
				<div class="modal fade dlt_grund_modal bs-example-modal-sm" id="deleteGroup" tabindex="-1" role="dialog" aria-labelledby="deleteGroundLabel">
				  <div class="modal-dialog modal-sm" role="document">
				    <div class="modal-content">
				      <div class="modal-header">
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
				        	<img src="../assets/img/close_icon.png" />
				        </button>
				        <h4 class="modal-title" id="deleteGroundLabel">Delete Ground</h4>
				      </div>
				      <div class="modal-body">
				      <div class="dlt_grund_cntnt">
				      	<p>There are 6 active reservations in this ground</p>
						<div class="dlt_grund_slct">
						<input id="radio1" name="radio" value="false" type="radio" checked="checked">
						<label for="radio1"></label>
						<p>Delete reservations and ground.</p>
						</div>
						<div class="dlt_grund_slct">
						<input id="radio1" name="radio" value="false" type="radio">
						<label for="radio1"></label>
						<p>Only delete ground (Doesn’t impact 
						current reservations, no future requests will be allowed)</p>
						</div>
				      </div>
				      </div>
						<div class="modal-footer">
						<button type="button" class="btn btn-default cncel_btn" data-dismiss="modal" ref="close_del_modal">
						<img src="../assets/img/cancel_icon.png" />
						</button>
						<button type="button" class="btn btn-primary save_btn" @click="deleteAdminFun">
						<img src="../assets/img/save_icon.png" />
						</button>
						</div>
				    </div>
				  </div>
				</div>
				<!-- Delete Ground modal end -->
	</div>
</template>

<script>

import HeaderComponent from '@/components/Header'
import SidebarComponent from '@/components/Sidebar'
import AppService from '@/services/AppService'

export default {
  data() {
    return {
      admin:{ type:[] },
      admins:[],
      del_admin_id:''
    }
  },
  name: 'Admin',
  props: {
    
  },
  methods: {
  	async getAdmins () {
      const res = await AppService.getAdmins()
      console.log('admins @@@', res.data)
      this.admins = res.data.data
		},
    async addAdmin () {
      const res = await AppService.addAdmin(this.admin)
      console.log('add admin @@@', res.data)
      if (res.data.status === 'success') {
      	this.admins.push(res.data.data)

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
		editAdmin (admin) {
			this.admin._id = admin._id
			this.admin.fname = admin.fname
			this.admin.lname = admin.lname
			this.admin.uname = admin.uname
			this.admin.email = admin.email
			this.admin.phone = admin.phone
			this.admin.type = admin.type
		},
		async updateAdmin () {
			const res = await AppService.updateAdmin(this.admin)
			if (res.data.status === 'success') {
				this.admins = res.data.data
				this.$notify({
		      group: 'foo',
		      type:'success',
		      text: 'Admin updated successfully'
		    });
			}
			this.$refs.close_edit_modal.click()
		},
		async deleteAdmin (id) {
			this.del_admin_id = id
		},
		async deleteAdminFun () {
			let data = {id:this.del_admin_id}
			const res = await AppService.deleteAdmin(data)
			if (res.data.status === 'success') {
				this.admins = res.data.data
				this.$notify({
		      group: 'foo',
		      type:'success',
		      text: 'Admin deleted successfully'
		    });
			}
			this.$refs.close_del_modal.click()
		}
  },
  mounted () {
  	this.getAdmins()
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