import t from "../components/templates";
import { AreaOfLife } from "./contents";

export default {
  1: {
    focusField: "name",
    title: "How do you spend a typical 168 hour week right now?",
    type: t.struct({
      name: t.String,
      age: t.Number,
      date: t.Date
    }),
    options: {
      fields: {
        name: {
          auto: "placeholders",
          error: "Field this field"
        },
        age: {
          auto: "placeholders",
          error: "Field this field"
        }
      }
    }
  }
};
