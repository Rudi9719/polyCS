app.controller('listCTRL', function($scope) {

  $scope.bsdegrees = [
    {degree: 'Computer & Information Science', url: "https://sunypoly.edu/undergraduate/computer-and-information-science/"},
    {degree: 'Computer Information Systems', url: "https://sunypoly.edu/undergraduate/cis/"},
    {degree: 'Network & Computer Security', url: "https://sunypoly.edu/undergraduate/network-and-computer-security/"},
    {degree: 'Applied Computing', url: "https://sunypoly.edu/undergraduate/applied-computing/"}
  ];

  $scope.xcel = [
    {combo: 'Computer & Information Science', url: "https://sunypoly.edu/undergraduate/computer-and-information-science/accelerated-bsms/"},
    //{combo: 'Network and Computer Security', url: ""}
  ];

  $scope.msdegrees = [
    {subject: 'Computer & Information Science', url: "https://sunypoly.edu/graduate/computer-information-science/"},
    {subject: 'Network & Computer Security', url: "https://sunypoly.edu/graduate/m-s-network-and-computer-security/"},
    //{subject: 'Telecommunications', url: "https://sunypoly.edu/undergraduate/computer-and-information-science/"}
  ];

  $scope.minors = [
    {minor: 'Computer & Information Science', url: "https://sunypoly.edu/undergraduate/computer-and-information-science/minors/computer-and-information-science/"},
    {minor: 'Computer Information Systems', url: "https://sunypoly.edu/undergraduate/computer-and-information-science/minors/computer-and-information-systems/"},
    {minor: 'Network & Computer Security', url: "https://sunypoly.edu/undergraduate/network-and-computer-security/minor/"}
  ]

});