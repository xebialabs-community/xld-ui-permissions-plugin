angular
		.module('myRepo', [])
		.config(
				function($httpProvider) {

					// The following code retrieves credentials from the main XL Deploy application
					// and tells AngularJS to append them to every request.
					var flexApp = parent.document
							.getElementById("flexApplication");
					if (flexApp)
						$httpProvider.defaults.headers.common.Authorization = flexApp
								.getBasicAuth();

				})
		.controller(
				'RepoController',
				function($http, $scope) {
					$scope.allperms = [ 'deploy#initial',
							'task#takeover', 'task#skip_step',
							'deploy#upgrade', 'deploy#undeploy',
							'controltask#execute', 'read', 'repo#edit',
							'task#move_step' ];
					$scope.globalperms = ["admin", "task#takeover",
					"task#skip_step", "report#view", "controltask#execute",
					"discovery", "task#preview_step", "security#edit",
					"login", "task#assign", "task#move_step"];
												
					$scope.loadCis = function() {
						$http
								.get('/api/extension/permissions')
								.then(
										function(response) {
											// response.data.entity is the serialized version of what Jython script puts into
											// response.entity in the script.
											$scope.resultCis = response.data.entity;
										});
					};

					$scope.loadCis();
				});
