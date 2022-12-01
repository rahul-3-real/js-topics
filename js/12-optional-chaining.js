const people = [
  {
    name: "John",
    location: { street: "123 Main Street", timezone: { offset: "+7:00" } },
  },
  {
    name: "Jane",
    location: { street: "456 Primary Street" },
  },
  {
    name: "Jennie",
    location: {
      street: "100 Secondary Street",
      timezone: { offset: "+11:00" },
    },
  },
];

people.forEach((person) => {
  //   console.log(
  //     person.location &&
  //       person.location.timezone &&
  //       person.location.timezone.offset
  //   );
  console.log(person?.location?.timezone?.offset || "Hello");
});
