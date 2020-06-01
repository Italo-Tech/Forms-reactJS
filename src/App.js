import React, { useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  const [NomeField, setNomeField] = useState("");
  const [EmailField, setEmailField] = useState("");
  const [TelefoneField, setTelefoneField] = useState("");
  const [CepField, setCepField] = useState("");
  const [EnderecoField, setEnderecoField] = useState("");
  const [NumeroField, setNumeroField] = useState("");
  const [BairroField, setBairroField] = useState("");
  const [EstadoField, setEstadoField] = useState("");
  const [CidadeField, setCidadeField] = useState("");

  const [lista, setLista] = useState([]);

  function addLista() {
    const novoObjeto = {
      Nome: NomeField,
      Email: EmailField,
      Telefone: TelefoneField,
      Cep: CepField,
      Endereco: EnderecoField,
      Numero: NumeroField,
      Bairro: BairroField,
      Estado: EstadoField,
      Cidade: CidadeField
    };
    setLista([...lista, novoObjeto]);
    setNomeField("");
    setEmailField("");
    setTelefoneField("");
    setCepField("");
    setEnderecoField("");
    setNumeroField("");
    setBairroField("");
    setCidadeField("");
    setEstadoField("");
  }

  return (
    // Front End
    <div className="App">
      {/* CONTAINER 1 */}
      <form className="container-main1 col-md-5">
        <h1 className="title">Formulário</h1>

        <div className="form-row">
          {/* Nome */}
          <div className="form-group col-md-6">
            <label>Nome*</label>
            <input
              className="input form-control"
              required="required"
              value={NomeField}
              onChange={e => setNomeField(e.target.value)}
              type="text"
              placeholder="Nome Completo"
            />
          </div>

          {/* Email */}
          <div className="form-group col-md-6">
            <label>Email</label>
            <input
              className="input form-control"
              value={EmailField}
              onChange={e => setEmailField(e.target.value)}
              type="email"
              placeholder="Endereço de Email"
            />
          </div>
        </div>

        <div className="form-row">
          {/* Telefone */}
          <div className="form-group col-md-6">
            <label>Telefone</label>
            <input
              className="input form-control"
              value={TelefoneField}
              onChange={e => setTelefoneField(e.target.value)}
              type="text"
              placeholder="(00) 90000-0000"
            />
          </div>

          {/* CEP */}
          <div className="form-group col-md-6">
            <label>CEP</label>
            <input
              className="input form-control"
              value={CepField}
              onChange={e => setCepField(e.target.value)}
              type="text"
              placeholder="00000-000"
            />
          </div>
        </div>

        <div className="form-row">
          {/* Endereço Residencial */}
          <div className="form-group col-md-8">
            <label>Endereço</label>
            <input
              className="input form-control"
              value={EnderecoField}
              onChange={e => setEnderecoField(e.target.value)}
              type="text"
              placeholder="Endereço Residêncial"
            />
          </div>

          {/* Número */}
          <div className="form-group col-md-4">
            <label>Número Residêncial</label>
            <input
              className="input form-control"
              value={NumeroField}
              onChange={e => setNumeroField(e.target.value)}
              type="number"
              placeholder="Número da Casa"
            />
          </div>
        </div>

        <div className="form-row">
          {/* Bairro */}
          <div className="form-group col-md-4">
            <label>Bairro</label>
            <input
              className="input form-control"
              value={BairroField}
              onChange={e => setBairroField(e.target.value)}
              type="text"
              placeholder="Bairro"
            />
          </div>

          {/* Estado */}
          <div className="form-group col-md-4">
            <label>Estado</label>
            <select
              className="input form-control"
              id="inputState"
              value={EstadoField}
              onChange={e => setEstadoField(e.target.value)}
              placeholder="Estado"
            >
              <option selected>Estado...</option>
              <option>Acre (AC)</option>
              <option>Alagoas (AL)</option>
              <option>Amapá (AP)</option>
              <option>Amazonas (AM)</option>
              <option>Bahia (BA)</option>
              <option>Ceará (CE)</option>
              <option>Distrito Federal (DF)</option>
              <option>Espírito Santo (ES)</option>
              <option>Goiás (GO)</option>
              <option>Maranhão (MA)</option>
              <option>Mato Grosso (MT)</option>
              <option>Minas Gerais (MG)</option>
              <option>Pará (PA)</option>
              <option>Paraíba (PB)</option>
              <option>Paraná (PR)</option>
              <option>Pernambuco (PB)</option>
              <option>Piauí (PI)</option>
              <option>Rio de Janeiro (RJ)</option>
              <option>Rio Grande do Norte (RN)</option>
              <option>Rio Grande do Sul (RS)</option>
              <option>Rondônia (RO)</option>
              <option>Roraima (RR)</option>
              <option>Santa Catarina (SC)</option>
              <option>São Paulo (SP)</option>
              <option>Sergipe (SE)</option>
              <option>Tocantins (TO)</option>
            </select>

            {/* <input
              className="input"
              value={EstadoField}
              onChange={e => setEstadoField(e.target.value)}
              type="text"
              placeholder="Número da Casa"
            /> */}
          </div>

          {/* Cidade */}
          <div className="form-group col-md-4">
            <label>Cidade</label>
            <input
              className="input form-control"
              value={CidadeField}
              onChange={e => setCidadeField(e.target.value)}
              type="text"
              placeholder="Número da Casa"
            />
          </div>

          <button className="button" onClick={addLista}>
            Exibir Lista
          </button>
        </div>
      </form>

      {/* CONTAINER 2 */}

      {/* Tabela */}
      <div className="container-main2 table">
        <table table>
          <thead className="thead-dark top">
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Email</th>
              <th scope="col">Telefone</th>
              <th scope="col">CEP</th>
              <th scope="col">Endereço</th>
              <th scope="col">Número</th>
              <th scope="col">Bairro</th>
              <th scope="col">Estado</th>
              <th scope="col">Cidade</th>
            </tr>
          </thead>

          <tbody Nome="tabela-alunos">
            {lista.map(function(item, i) {
              return (
                <tr>
                  <td>{item.Nome}</td>
                  <td>{item.Email}</td>
                  <td>{item.Telefone}</td>
                  <td>{item.Cep}</td>
                  <td>{item.Endereco}</td>
                  <td>{item.Numero}</td>
                  <td>{item.Bairro}</td>
                  <td>{item.Estado}</td>
                  <td>{item.Cidade}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
