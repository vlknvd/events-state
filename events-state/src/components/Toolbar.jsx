const Toolbar = (props) => {
  const chooseCategory = props.chooseCategory;
  const categories = props.categories;

  return (
    <div class="toolbar-filters">
      {categories.map(category => (
        <button
          onClick={() => chooseCategory(category)}
          className={props.activeTag === category ? 'black button' : 'button'}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Toolbar