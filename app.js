var app = angular.module("reddit", ['angularMoment']);


app.controller('MainController', function($scope){
  $scope.view = {};
  $scope.view.showPostForm = false;
  // $scope.view.sort = 'votes';
  $scope.view.posts = [
    {
      title: "Black Canyon of the Gunnison",
      author: "Samantha Spensley",
      image: "https://www.nps.gov/common/uploads/grid_builder/imr/crop16_9/41DEC438-1DD8-B71B-0BB27A016E404D9F.jpg?width=465&quality=90&mode=crop",
      description: "Big enough to be overwhelming, still intimate enough to feel the pulse of time, Black Canyon of the Gunnison exposes you to some of the steepest cliffs, oldest rock, and craggiest spires in North America. With two million years to work, the Gunnison River, along with the forces of weathering, has sculpted this vertical wilderness of rock, water, and sky.",
      votes: 4,
      comments: [{
      commentAuthor: "Sammy G",
      comment: "Blah blah blah. "
    }, {
      commentAuthor: "Alibaba",
      comment: "commenting!!!"
    }]
    },
    {
      title: "Colorado National Monument",
      author: "Samantha Spensley",
      image: "https://cdn-co.milespartnership.com/sites/default/master/files/coloradonationalmonument_MI.jpg",
      description: "Colorado National Monument preserves one of the grand landscapes of the American West. But this treasure is much more than a monument. Towering monoliths exist within a vast plateau and canyon panorama. You can experience sheer-walled, red rock canyons along the twists and turns of Rim Rock Drive, where you may spy bighorn sheep and soaring eagles.",
      votes: 2,
      comments: []
    },
    {
      title: "Great Sand Dunes",
      author: "Samantha Spensley",
      image: "https://www.nps.gov/common/uploads/grid_builder/imr/crop16_9/8EADDB13-1DD8-B71B-0B43FFA9BE6A3D82.jpg?width=950&quality=90&mode=crop",
      description: "The tallest dunes in North America are the centerpiece in a diverse landscape of grasslands, wetlands, conifer and aspen forests, alpine lakes, and tundra. Experience this diversity through hiking, sand sledding, splashing in Medano Creek, wildlife watching, and more!",
      votes: 3,
      comments: []
    },
  ];

  // Functions
  // Submit New Post
  $scope.submitPost = function(form){
    $scope.view.posts.push({
      title: $scope.view.title,
      author: $scope.view.author,
      image: $scope.view.image,
      description: $scope.view.description,
      votes: 0,
      date: Date.now(),
      comments: [],
      showComments: false,
      showCommentForm: false
    });
    form.$setPristine();
    $scope.togglePostForm();
    $scope.view.title = '';
    $scope.view.author = '';
    $scope.view.image = '';
    $scope.view.description = '';
  };

  // Submit New Comment
  $scope.submitComment = function(post, form) {
    console.log(post);
    console.log(form);
    post.comments.push({
      commentAuthor: $scope.view.commentAuthor,
      comment: $scope.view.comment,
    });
    post.showComments = true;
    form.$setPristine();
    $scope.toggleCommentForm(post)
    $scope.view.commentAuthor = '';
    $scope.view.comment = '';
  }

  // Show/Hide Forms and Comments
  $scope.togglePostForm = function() {
    $scope.view.showPostForm = !$scope.view.showPostForm;
  }

  $scope.toggleCommentForm = function(post) {
    post.showCommentForm = !post.showCommentForm;
  }

  $scope.toggleComments = function(post) {
    post.showComments = !post.showComments;
  }

  // Add/Remove Votes
  $scope.addVote = function(post) {
    post.votes++;
  }

  $scope.removeVote = function(post) {
    post.votes--;
  }

});
