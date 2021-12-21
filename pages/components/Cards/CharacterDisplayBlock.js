import styled from "styled-components";

const CharacterDisplayBlock = ({ character }) => {
  return character ? (
    <FormWrapper className="flex flex-wrap py-7">
      <div className="w-full flex">
        <div className="w-6/12 mr-4 flex flex-col">
          <label className="text-white mb-2"> Character Name: </label>
          <input className="p-3" type="textbox" value={character.name} />
        </div>
        <div className="w-6/12 flex flex-col">
          <label className="text-white mb-2"> Character Class: </label>
          <input className="p-3" type="textbox" value={character} />
        </div>
      </div>
      <div className="flex w-full mt-4">
        <div className="w-4/12 flex mr-4 flex-col">
          <label className="text-white mb-2"> Height: </label>
          <input className="p-3" type="textbox" value={character.height} />
        </div>
        <div className="w-4/12 flex mr-4 flex-col">
          <label className="text-white mb-2"> Weight: </label>
          <input className="p-3" type="textbox" value={character.weight} />
        </div>
        <div className="w-4/12 flex flex-col">
          <label className="text-white mb-2"> Skin: </label>
          <input className="p-3" type="textbox" value={character.skin} />
        </div>
      </div>
      <div className="flex w-full mt-4 flex-col">
        <h1> Stats: </h1>
        <div className="flex w-full">
          <div className="flex w-2/12 mr-2 flex-col">
            <label> Strength </label>
            <input type="textbox" value={15} />
          </div>
          <div className="flex w-2/12 mr-2 flex-col">
            <label> Dexterity </label>
            <input type="textbox" value={15} />
          </div>
          <div className="flex w-2/12 mr-2 flex-col">
            <label> Constitution </label>
            <input type="textbox" value={15} />
          </div>
          <div className="flex w-2/12 mr-2  flex-col">
            <label> Wisdom </label>
            <input type="textbox" value={15} />
          </div>
          <div className="flex w-2/12 mr-2 flex-col">
            <label> Intelligence </label>
            <input type="textbox" value={15} />
          </div>
          <div className="flex w-2/12 flex-col">
            <label> Charisma </label>
            <input type="textbox" value={15} />
          </div>
        </div>
      </div>
    </FormWrapper>
  ) : null;
};

const FormWrapper = styled.form`
  label {
    margin-bottom: 8px;
    color: white;
  }
  input[type="textbox"] {
    background: #1e1e27;
    color: white;
    padding: 1rem;
  }
`;

export default CharacterDisplayBlock;
