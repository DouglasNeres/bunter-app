type Props = {
  width?: string | number;
  height?: string | number;
}
export function HambuguerIcon({ width = 75, height = 75}: Props) {
  return (

    <div style={{width, height}}>
      <svg style={{ width: 'inherit', height: 'inherit'}} viewBox="0 0 259 259" xmlns="http://www.w3.org/2000/svg">
        <path d="M53.9583 75.5416H205.042" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M102.999 130.255H205.042" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M53.9583 183.458H205.042" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  )
}