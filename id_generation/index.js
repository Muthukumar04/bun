import { nanoid } from "nanoid";
import shortid from "shortid";

console.log({ nanoid: nanoid(), shortid: shortid.generate() });
