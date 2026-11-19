export function whatsappLink(number, packageName) {
  const message = packageName
    ? `Hi, I'm interested in booking your car for the ${packageName} package. Please let me know the availability and pickup details.`
    : "Hi, I'm interested in booking your car. Please let me know the availability and pickup details.";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const telLink = (number) => `tel:+${number}`;

export const pretty = (number) => {
  const n = number.slice(2);
  return `${n.slice(0, 5)} ${n.slice(5)}`;
};
