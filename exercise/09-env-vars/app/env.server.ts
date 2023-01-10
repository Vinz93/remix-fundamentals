import invariant from "tiny-invariant";

export function getEnv() {
  invariant(process.env.ADMIN_EMAIL, "the ADMIN_EMAIL is missing");
  return {
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
  };
}

export type ENV = ReturnType<typeof getEnv>;
