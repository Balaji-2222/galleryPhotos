const Images = props => {
  const {eachItem} = props
  const {imageUrl} = eachItem
  return (
    <div>
      <button>
        <img src={imageUrl} className="smallImage" />
      </button>
    </div>
  )
}
export default Images
