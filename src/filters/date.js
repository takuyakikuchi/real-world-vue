export default value => {
  const date = new Date(value)
  return date.toLocaleString(['en-US'], {
    month: 'short',
    date: '2-digits',
    year: 'numeric'
  })
}
