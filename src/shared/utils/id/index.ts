import { customAlphabet } from "nanoid/non-secure";

// Currently just using base 16
const alphabet = "0123456789abcdef";

export default customAlphabet(alphabet, 16);
