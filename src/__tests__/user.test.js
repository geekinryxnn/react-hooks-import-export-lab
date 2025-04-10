import { username, city, image } from "../data/user";

test("username, city, and image are all exported", () => {
  expect(username).toEqual("John Doe");
  expect(city).toEqual("New York");
  expect(image).toEqual("https://via.placeholder.com/150");
});
