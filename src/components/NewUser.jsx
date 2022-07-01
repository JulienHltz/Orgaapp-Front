import "./_newUser.scss";

const NewUser = () => {
  return (
    <>
      <div className="container">
        <h2>Ajouter un nouvel utilisateur</h2>
        <form action="">
          <label htmlFor="">Prénom :</label>
          <input type="text" />
          <label htmlFor="">Nom :</label>
          <input type="text" />
          <label htmlFor="">Email :</label>
          <input type="mail" />
          <label htmlFor="">Mot de passe :</label>
          <input type="text" />
          <button type="submit">Ajouter</button>
        </form>
      </div>
    </>
  );
};

export default NewUser;
