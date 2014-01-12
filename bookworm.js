if (Meteor.isClient) {

  Template.leaders.people = [
    { fullName: "John Doe", totalCredits: "25" },
    { fullName: "Jane Smith", totalCredits: "20" },
    { fullName: "Sophie Turner", totalCredits: "15" },
    { fullName: "Jack Lewis", totalCredits: "10" },
    { fullName: "Smedley Smedlerson", totalCredits: "5" }
  ];
}