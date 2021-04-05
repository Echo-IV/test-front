import { render } from "@testing-library/react";
import DisplayLimit from "./DisplayLimit";

test("render DisplayLimit", () => {
  const props = {
    setLimit: jest.fn(),
    limit: 10,
  };

  render(<DisplayLimit {...props} />);
});
