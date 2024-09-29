import { AbilityBuilder, Ability } from "@casl/ability";

export const defineAbilityFor = (user) => {
  const { can, cannot, build } = new AbilityBuilder(Ability);

  if (user.role.name === "Customer") {
    can("read", "Piza");
    can("create", "Order");
    can("read", "Order", { userId: user.id });
  }

  if (user.role.name === "Manager") {
    can("manage", "Piza", { restorantId: user.restorantId });
    can("read", "Order", { piza: { restorantId: user.restorantId } });
    can("update", "Order", { piza: { restorantId: user.restorantId } });
  }

  return build();
};
