export default function Badge({ count }: { count: number }) {
  return count !== 0 ? <span>{count}</span> : null;
}
