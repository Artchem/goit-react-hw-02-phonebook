export const ContactList = ({ options, deleteContact }) => {
  // console.log(options);
  return options.map(option => (
    <li key={option.id}>
      {option.name}: {option.number}
      <button onClick={() => deleteContact(option.name)} type="button">
        Delete
      </button>
    </li>
  ));
};
