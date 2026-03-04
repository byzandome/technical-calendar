export function generateUniqueId(...args: string[]): string {
  return args.join("-");
}