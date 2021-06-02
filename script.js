//Função pra limpar campos - Escopo Global
const clearFunction = () => {
  const clearButton = document.querySelector("#clearButton");

  if (confirm("Apagar campos?")) {
    clearButton.type = "reset";
  }
};

const copiaNome = () => {
  let name = document.querySelector("#vinculos_nome_copia");
  name.select();
  document.execCommand("copy");
};
const copiaOrgao = () => {
  let orgao = document.querySelector("#vinculos_orgao_copia");
  orgao.select();
  document.execCommand("copy");
};
const copiaEmail = () => {
  let email = document.querySelector("#vinculos_email_copia");
  email.select();
  document.execCommand("copy");
};
const copiaAssunto = () => {
  let assunto = document.querySelector("#vinculos_assunto_copia");
  assunto.select();
  document.execCommand("copy");
};
const copiaResposta = () => {
  let resposta = document.querySelector("#vinculos_text_area");
  textarea.select();
  document.execCommand("copy");
};

// Início da página de Vínculos
function resposta_vinculos() {
  let orgao = document.querySelector("#vinculos_orgao").value;

  let orgaoCopia = document.querySelector("#vinculos_orgao_copia");

  let processo = document.querySelector("#vinculos_processo").value;

  let email = document.querySelector("#vinculos_email").value;

  let emailCopia = document.querySelector("#vinculos_email_copia");

  let segurado = document.querySelector("#vinculos_nome").value;

  let seguradoCopia = document.querySelector("#vinculos_nome_copia");

  let endereco = document.querySelector("#vinculos_endereco").value;

  let situacao = document.getElementsByClassName("radio_vinculos");

  let ressalvas = document.querySelectorAll(".ressalvas");

  let empresa = document.querySelector("#vinculos_empresa").value;

  let ultimoSalario = document.querySelector("#vinculos_salario").value;

  let data_inicio = document
    .querySelector("#vinculos_data_inicio")
    .value.split("-")
    .reverse()
    .join("/");

  let beneficio = document.querySelector("#vinculos_tipoBeneficio").value;

  let inicioBeneficio = document
    .querySelector("#vinculos_beneficioInicio")
    .value.split("-")
    .reverse()
    .join("/");

  let valorBeneficio = document.querySelector("#valorBeneficio").value;

  let resposta = document.querySelector("#vinculos_textarea");

  let assunto = document.querySelector("#assunto");

  // Variáveis com as respostas para melhor organização

  const naoLocalizado = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com dados de consultas aos sistemas do INSS. Neste documento é possível constatar que não foi possível localizar o cadastro do(a) Sr.(a) ${segurado} através dos dados informados.`;

  const vinculoAtivo = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que consta que o(a) segurado(a) ${segurado} tem vínculo ativo com a empresa ${empresa} desde ${data_inicio}.`;

  const vinculoESalario = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que consta que o(a) segurado(a) ${segurado} tem vínculo ativo com a empresa ${empresa} desde ${data_inicio}, e seu último salário informado pelo empregador foi R$ ${ultimoSalario}.`;

  const vinculoAbertoESemRemuneracao = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que consta que o(a) segurado(a) ${segurado} tem vínculo(s) em aberto, no entanto, não existem dados atuais informados pela(s) empresa(s) sobre a remuneração recebida, o que gera dúvida quanto à manutenção deste(s) vínculo(s).`;

  const semVinculoAtivo = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que não foi localizado nenhum vínculo ativo atual no cadastro do(a) segurado(a) ${segurado}.`;

  const beneficioAtivo = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que consta que o(a) segurado(a) ${segurado} recebe benefício de ${beneficio} desde ${inicioBeneficio} com o valor bruto de R$ ${valorBeneficio}.`;

  const semBeneficioAtivo = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que não foi localizado nenhum benefício ativo no cadastro do(a) segurado(a) ${segurado}.`;

  const informarEndereco = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que consta(m) o(s) seguinte(s) endereço(s) do segurado ${segurado}: \n\n${endereco}`;

  const cnisExtrato = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando o relatório completo do CNIS. Neste documento é possível analisar o histórico completo de vínculos e remunerações do(a) segurado(a) ${segurado}.`;

  const cnisVazio = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que não foi localizado nenhum vínculo, contribuição ou benefício no cadastro do(a) segurado(a) ${segurado}.`;

  const dadosCadastrais = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar os dados cadastrais do(a) segurado(a) ${segurado}.`;

  const ressalvaDependentes = `\n\nImportante ressaltar que dependentes somente são cadastrados/habilitados no INSS após aprovação de requerimento administrativo de benefício de Pensão por Morte quando ocorre o óbito do segurado, inexistindo assim um cadastro prévio de dependentes administrado pelo INSS.`;

  const ressalvaEscopoInss = `\n\nImportante ressaltar que o INSS é uma autarquia federal que trata somente de questões previdenciárias relacionadas ao Regime Geral de Previdência Social (RGPS), não dispondo de informações sobre quaisquer programas de outros entes federais.`;

  const outraSituacao = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que`;

  const atenciosamente = `\n\nAtenciosamente,\n`;

  assunto.value = `Ofício - Processo ${processo} - ${segurado}`;
  seguradoCopia.value = segurado;
  orgaoCopia.value = orgao;
  emailCopia.value = email;

  //Segurado não localizado
  if (situacao[0].checked) {
    if (ressalvas[1].checked) {
      resposta.value = naoLocalizado + ressalvaDependentes + atenciosamente;
    } else if (ressalvas[2].checked) {
      resposta.value = naoLocalizado + ressalvaEscopoInss + atenciosamente;
    } else {
      resposta.value = naoLocalizado + atenciosamente;
    }
  }
  //Vínculo Ativo
  if (situacao[1].checked) {
    if (ressalvas[1].checked) {
      resposta.value = vinculoAtivo + ressalvaDependentes + atenciosamente;
    } else if (ressalvas[2].checked) {
      resposta.value = vinculoAtivo + ressalvaEscopoInss + atenciosamente;
    } else {
      resposta.value = vinculoAtivo + atenciosamente;
    }
  }
  //Vínculo e Salário
  if (situacao[2].checked) {
    if (ressalvas[1].checked) {
      resposta.value = vinculoESalario + ressalvaDependentes + atenciosamente;
    } else if (ressalvas[2].checked) {
      resposta.value = vinculoESalario + ressalvaEscopoInss + atenciosamente;
    } else {
      resposta.value = vinculoESalario + atenciosamente;
    }
  }
  //Vínculo aberto e sem remuneração recente
  if (situacao[3].checked) {
    if (ressalvas[1].checked) {
      resposta.value =
        vinculoAbertoESemRemuneracao + ressalvaDependentes + atenciosamente;
    } else if (ressalvas[2].checked) {
      resposta.value =
        vinculoAbertoESemRemuneracao + ressalvaEscopoInss + atenciosamente;
    } else {
      resposta.value = vinculoAbertoESemRemuneracao + atenciosamente;
    }
  }
  //Sem Vínculo Ativo
  if (situacao[4].checked) {
    if (ressalvas[1].checked) {
      resposta.value = semVinculoAtivo + ressalvaDependentes + atenciosamente;
    } else if (ressalvas[2].checked) {
      resposta.value = semVinculoAtivo + ressalvaEscopoInss + atenciosamente;
    } else {
      resposta.value = semVinculoAtivo + atenciosamente;
    }
  }
  //Benefício Ativo
  if (situacao[5].checked) {
    if (ressalvas[1].checked) {
      resposta.value = beneficioAtivo + ressalvaDependentes + atenciosamente;
    } else if (ressalvas[2].checked) {
      resposta.value = beneficioAtivo + ressalvaEscopoInss + atenciosamente;
    } else {
      resposta.value = beneficioAtivo + atenciosamente;
    }
  }
  //Sem Benefício Ativo
  if (situacao[6].checked) {
    if (ressalvas[1].checked) {
      resposta.value = semBeneficioAtivo + ressalvaDependentes + atenciosamente;
    } else if (ressalvas[2].checked) {
      resposta.value = semBeneficioAtivo + ressalvaEscopoInss + atenciosamente;
    } else {
      resposta.value = semBeneficioAtivo + atenciosamente;
    }
  }
  //Endereço
  if (situacao[7].checked) {
    if (ressalvas[1].checked) {
      resposta.value = informarEndereco + ressalvaDependentes + atenciosamente;
    } else if (ressalvas[2].checked) {
      resposta.value = informarEndereco + ressalvaEscopoInss + atenciosamente;
    } else {
      resposta.value = informarEndereco + atenciosamente;
    }
  }
  //CNIS Extrato
  if (situacao[8].checked) {
    if (ressalvas[1].checked) {
      resposta.value = cnisExtrato + ressalvaDependentes + atenciosamente;
    } else if (ressalvas[2].checked) {
      resposta.value = cnisExtrato + ressalvaEscopoInss + atenciosamente;
    } else {
      resposta.value = cnisExtrato + atenciosamente;
    }
  }
  //CNIS Vazio
  if (situacao[9].checked) {
    if (ressalvas[1].checked) {
      resposta.value = cnisVazio + ressalvaDependentes + atenciosamente;
    } else if (ressalvas[2].checked) {
      resposta.value = cnisVazio + ressalvaEscopoInss + atenciosamente;
    } else {
      resposta.value = cnisVazio + atenciosamente;
    }
  }
  //Dados Cadastrais
  if (situacao[10].checked) {
    if (ressalvas[1].checked) {
      resposta.value = dadosCadastrais + ressalvaDependentes + atenciosamente;
    } else if (ressalvas[2].checked) {
      resposta.value = dadosCadastrais + ressalvaEscopoInss + atenciosamente;
    } else {
      resposta.value = dadosCadastrais + atenciosamente;
    }
  }
  //Outra Situação
  if (situacao[11].checked) {
    if (ressalvas[1].checked) {
      resposta.value = outraSituacao + ressalvaDependentes + atenciosamente;
    } else if (ressalvas[2].checked) {
      resposta.value = outraSituacao + ressalvaEscopoInss + atenciosamente;
    } else {
      resposta.value = outraSituacao + atenciosamente;
    }
  }
}
//Final da página de Vínculos

// Início da página de Dependentes
function resposta_dependentes() {
  const orgao = document.querySelector("#dependentes_orgao").value;

  let orgaoCopia = document.querySelector("#dependentes_orgao_copia");

  orgaoCopia.value = orgao;

  const processo = document.querySelector("#dependentes_processo").value;

  const email = document.querySelector("#dependentes_email").value;

  let emailCopia = document.querySelector("#dependentes_email_copia");

  emailCopia.value = email;

  const segurado = document.querySelector("#dependentes_segurado_nome").value;

  let seguradoCopia = document.querySelector(
    "#dependentes_segurado_nome_copia"
  );

  seguradoCopia.value = segurado;

  const dependentes = document.querySelector(".dependentes_textarea").value;

  const situacao = document.getElementsByClassName("depRadioInputs");

  const assuntoEmail = document.querySelector("#assunto_email");

  const resposta = document.getElementById("dependentes_resposta");

  //Variáveis com as respostas pra melhor organização

  const naoLocalizado = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com dados de consultas aos sistemas do INSS. Neste documento é possível constatar que não foi possível localizar o cadastro do(a) Sr.(a) ${segurado} através dos dados informados.\n\nAtenciosamente,\n`;

  const temDependentes = `Em relação ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório anexo com consultas aos sistemas do INSS. Neste documento é possível verificar que existem dependentes habilitados em benefício de Pensão por Morte com o(a) Sr.(a) ${segurado} como instituidor(a), sendo ele(s):
        
  ${dependentes}\nAtenciosamente,\n`;

  const semDependentes = `Em relação ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com consultas aos sistemas do INSS. Neste documento é possível verificar que não foram localizados dependentes habilitados em benefício de Pensão por Morte com o(a) Sr.(a) ${segurado} como instituidor(a) no âmbito do Regime Geral de Previdência Social(RGPS).\n\nAtenciosamente,\n`;

  const semDependentesTemRequerimento = `Em relação ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com consultas aos sistemas do INSS. Neste documento é possível verificar que embora ainda não existam dependentes habilitados com o(a) Sr.(a) ${segurado} como instituidor(a) no âmbito do Regime Geral de Previdência Social(RGPS), existe requerimento em aberto de benefício de Pensão por Morte.\n\nAtenciosamente,\n`;

  const semDependentesSemRequerimento = `Em relação ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com consultas aos sistemas do INSS. Neste documento é possível verificar que não foram localizados dependentes habilitados, e até o momento da realização destas consultas, também não consta requerimento em aberto de benefício de Pensão por Morte em nome com o(a) Sr.(a) ${segurado} como instituidor(a) no âmbito do Regime Geral de Previdência Social(RGPS) .\n\nAtenciosamente,\n`;

  const semDependentesCertidao = `Em relação ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com consultas aos sistemas do INSS. Neste documento é possível verificar que não foram localizados dependentes habilitados em benefício de Pensão por Morte com o(a) Sr.(a) ${segurado} como instituidor(a) no âmbito do Regime Geral de Previdência Social(RGPS), motivo pelo qual estamos encaminhando a Certidão de Inexistência de Dependentes.\n\nAtenciosamente,\n`;

  const tinhamDependentes = `Em relação ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório anexo com consultas aos sistemas do INSS. Neste documento é possível verificar que, embora no momento atual não tenham sido localizados dependentes com benefício ativo do(a) Sr.(a) ${segurado} como instituidor(a), foram reconhecidos anteriormente como dependentes:
        
  ${dependentes}\n\nAtenciosamente,\n`;

  const dependentesCertidao = `Em relação ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório anexo com consultas aos sistemas do INSS. Neste documento é possível verificar que existem dependentes habilitados em benefício de Pensão por Morte com o(a) Sr.(a) ${segurado} como instituidor(a), motivo pelo qual encaminhamos a Certidão de PIS/PASEP/FGTS conforme solicitação.\n\nAtenciosamente,\n`;

  assuntoEmail.value = `Ofício - Processo ${processo} - ${segurado}`;

  if (situacao[0].checked) {
    resposta.value = naoLocalizado;
  } else if (situacao[1].checked) {
    resposta.value = temDependentes;
  } else if (situacao[2].checked) {
    resposta.value = tinhamDependentes;
  } else if (situacao[3].checked) {
    resposta.value = dependentesCertidao;
  } else if (situacao[4].checked) {
    resposta.value = semDependentes;
  } else if (situacao[5].checked) {
    resposta.value = semDependentesTemRequerimento;
  } else if (situacao[6].checked) {
    resposta.value = semDependentesSemRequerimento;
  } else if (situacao[7].checked) {
    resposta.value = semDependentesCertidao;
  }

  /*
  Fazer a parte de ressalvas

  Incluir ressalva sobre a comunicação de óbito automática por conta do registro em cartório.








  */
}
// Final da página de Dependentes

//Início da página de Resíduos
function respostaResiduos() {
  const nome = document.querySelector("#residuos_nome").value;

  const processo = document.querySelector("#residuos_processo").value;

  const situacao = document.querySelectorAll(".radioResiduos");

  const mr = Number(document.querySelector("#residuos_mr").value);

  const valorDia = mr / 30;

  const dataFormatada = document
    .querySelector("#dataObito")
    .value.split("-")
    .reverse()
    .join("/");

  //Trecho com substring pra quebrar a string e gerar números para cálculos

  let diaObito = Number(dataFormatada.substring(0, 2));

  if (diaObito == 31) {
    diaObito = 30;
  }

  let mesObito = Number(dataFormatada.substring(3, 5));

  const anoObito = dataFormatada.substring(6, 10);

  let proporcionalDias = valorDia * diaObito;

  const mesesCheckbox = document.querySelectorAll(".checkboxes");

  let qtdMesesSelecionados = 0;

  let competenciasSelecionadas = [];

  for (let i = 0; i < mesesCheckbox.length; i++) {
    if (mesesCheckbox[i].checked) {
      qtdMesesSelecionados += 1;
      competenciasSelecionadas.push(mesesCheckbox[i].value);
    }
  }

  if (competenciasSelecionadas == "") {
    proporcionalDias = 0;
  }

  let valoresIndevidos = Number(
    document.querySelector("#valoresIndevidos").value
  );

  const situacao13 = document.querySelectorAll(".situacao13");

  let _13jaRecebido = Number(document.querySelector("#_13_recebido").value);

  let proporcional13 = Number((mr / 12) * mesObito);

  if (diaObito < 15) {
    mesObito -= 1;
    proporcional13 = Number((mr / 12) * mesObito);
  }

  if (situacao13[1].checked) {
    proporcional13 = 0;
  }

  let valorTotalCom13 =
    proporcionalDias + proporcional13 - (_13jaRecebido + valoresIndevidos);

  if (competenciasSelecionadas.length > 1) {
    valorTotalCom13 =
      mr * (competenciasSelecionadas.length - 1) +
      proporcionalDias +
      proporcional13 -
      (_13jaRecebido + valoresIndevidos);
  }

  let valorTotalSem13 = proporcionalDias - valoresIndevidos;

  if (competenciasSelecionadas.length > 1) {
    valorTotalSem13 =
      mr * (competenciasSelecionadas.length - 1) +
      proporcionalDias -
      valoresIndevidos;
  }

  const assunto = document.querySelector("#residuos_assunto");

  let resposta = document.querySelector("#residuos_resposta");

  const ressalvas = document.getElementsByClassName("radioRessalvas");

  //Respostas em variáveis para melhor organização do código

  const respostaCalculosCom13 = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com dados do(a) Sr(a) ${nome} nos sistemas do INSS. Neste documento é possível verificar a seguinte situação:

- Data do Óbito: ${dataFormatada}
- Meses pendentes de pagamento: ${competenciasSelecionadas}/${anoObito}

- Valor integral do Benefício: R$ ${mr.toFixed(2).replace(".", ",")}
- Proporcional de ${diaObito} dias: R$ ${proporcionalDias
    .toFixed(2)
    .replace(".", ",")}
    
- 13º proporcional a ${mesObito} meses(Períodos com pelo menos 15 dias): R$ ${proporcional13
    .toFixed(2)
    .replace(".", ",")
    .replace(".", ",")}
- 13º já recebido: R$ ${_13jaRecebido.toFixed(2).replace(".", ",")}
- 13º pendente: R$ ${(proporcional13 - _13jaRecebido)
    .toFixed(2)
    .replace(".", ",")}

- Valores recebidos indevidamente: R$ ${valoresIndevidos
    .toFixed(2)
    .replace(".", ",")}
- Total de Resíduos: R$ ${valorTotalCom13.toFixed(2).replace(".", ",")}

Estes valores serão recalculados e será acrescida a correção monetária através de análise administrativa quando o requerimento dos valores devidos for realizado pelos interessados.`;

  const respostaCalculosSem13 = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com dados do(a) Sr(a) ${nome} nos sistemas do INSS. Neste documento é possível verificar a seguinte situação:

- Data do Óbito: ${dataFormatada}
- Meses pendentes de pagamento: ${competenciasSelecionadas}/${anoObito}
  
- Valor integral do Benefício: R$ ${mr.toFixed(2).replace(".", ",")}
- Proporcional de ${diaObito} dias: R$ ${proporcionalDias
    .toFixed(2)
    .replace(".", ",")}

- 13º: Benefício sem 13º salário.

- Valores recebidos indevidamente: R$ ${valoresIndevidos
    .toFixed(2)
    .replace(".", ",")}
- Total de Resíduos: R$ ${valorTotalSem13.toFixed(2).replace(".", ",")}

Estes valores serão recalculados e será acrescida a correção monetária através de análise administrativa quando o requerimento dos valores devidos for realizado pelos interessados.`;

  const naoLocalizado = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com consultas aos sistemas do INSS. Neste documento é possível verificar que não foi localizado o cadastro do(a) segurado(a) ${nome} com base nos dados informados.`;

  const semBeneficio = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com consultas aos sistemas do INSS. Neste documento é possível verificar que não foi localizado nenhum benefício no cadastro do(a) Sr.(a) ${nome}, inexistindo assim, resíduos pendentes de pagamento por parte do INSS.`;

  const semResiduos = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com consultas aos sistemas do INSS. Neste documento é possível verificar que não existem valores pendentes de pagamento referente o(s) benefício(s) do Sr.(a) ${nome}.`;

  const semResiduosCalc13 = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com consultas aos sistemas do INSS. Neste documento é possível verificar que não existem valores pendentes de pagamento referente o(s) benefício(s) do Sr.(a) ${nome}: 
  
- Data do Óbito: ${dataFormatada}

- Valor integral do Benefício: R$ ${mr.toFixed(2).replace(".", ",")}
- Proporcional de ${diaObito} dias: R$ ${proporcionalDias
    .toFixed(2)
    .replace(".", ",")}

- 13º proporcional a ${mesObito} meses (Períodos com pelo menos 15 dias): R$ ${proporcional13
    .toFixed(2)
    .replace(".", ",")
    .replace(".", ",")}
- 13º já recebido: R$ ${_13jaRecebido.toFixed(2).replace(".", ",")}
- 13º pendente: R$ ${(proporcional13 - _13jaRecebido)
    .toFixed(2)
    .replace(".", ",")}

- Valores recebidos indevidamente: R$ ${valoresIndevidos
    .toFixed(2)
    .replace(".", ",")}
- Total de Resíduos: R$ ${valorTotalCom13.toFixed(2).replace(".", ",")}`;

  const semResiduosCalcSem13 = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com consultas aos sistemas do INSS. Neste documento é possível verificar que não existem valores pendentes de pagamento referente o(s) benefício(s) do Sr.(a) ${nome}:
  
- Data do Óbito: ${dataFormatada}

- Valor integral do Benefício: R$ ${mr.toFixed(2).replace(".", ",")}
- Proporcional de ${diaObito} dias: R$ ${proporcionalDias
    .toFixed(2)
    .replace(".", ",")}

- 13º: Benefício sem 13º salário.

- Valores recebidos indevidamente: R$ ${valoresIndevidos
    .toFixed(2)
    .replace(".", ",")}
- Total de Resíduos: R$ ${valorTotalSem13.toFixed(2).replace(".", ",")}`;

  var acertoContas = `\n\nNeste caso, embora existam resíduos a serem pagos, também existem valores pagos indevidamente, o que acarretará na realização de acerto de contas quando o requerimento dos valores for realizado pelos interessados.`;

  const cadastroDependentes = `\n\nImportante salientar que dependentes somente são cadastrados/habilitados no INSS após aprovação de requerimento administrativo de benefício de Pensão por Morte quando ocorre o óbito do segurado, inexistindo assim um cadastro prévio de dependentes administrado pelo INSS.`;

  const escopoInss = `\n\nRessaltamos que o INSS é uma autarquia federal que trata somente de questões previdenciárias relacionadas ao Regime Geral de Previdência Social (RGPS), não dispondo de informações sobre quaisquer programas de outros entes federais.`;

  const dadosBancarios = `\n\nImportante salientar que o INSS realiza a concessão e administração de benefícios através de sistemas próprios e não tem acesso aos dados bancários/financeiros do segurado, cabendo ao agente bancário esta competência.`;

  const mob = `\n\nNeste caso, como houve recebimento pós-óbito, o processo será encaminhado ao setor de Monitoramento Operacional de Benefícios(MOB) para apuração das competências e valores recebidos após o óbito do segurado.`;

  const atenciosamente = `\n\nAtenciosamente,`;

  assunto.value = `Ofício - Processo ${processo} - ${nome}`;

  //Cálculos com resíduos e ressalvas
  if (situacao[0].checked) {
    //Alerta se a MR estiver zerada
    if (mr === 0) {
      alert("É necessário preencher o valor da MR do benefício.");
    }

    //Com 13º
    if (situacao13[0].checked) {
      if (ressalvas[0].checked) {
        resposta.value = respostaCalculosCom13 + atenciosamente;
      }
      if (ressalvas[1].checked) {
        resposta.value = respostaCalculosCom13 + acertoContas + atenciosamente;
      }
      if (ressalvas[2].checked) {
        resposta.value =
          respostaCalculosCom13 + cadastroDependentes + atenciosamente;
      }
      if (ressalvas[3].checked) {
        resposta.value = respostaCalculosCom13 + escopoInss + atenciosamente;
      }
      if (ressalvas[4].checked) {
        resposta.value =
          respostaCalculosCom13 + dadosBancarios + atenciosamente;
      }
      if (ressalvas[5].checked) {
        resposta.value = respostaCalculosCom13 + mob + atenciosamente;
      }

      //Sem 13º e ressalvas
    } else {
      if (ressalvas[0].checked) {
        resposta.value = respostaCalculosSem13 + atenciosamente;
      }
      if (ressalvas[1].checked) {
        resposta.value = respostaCalculosSem13 + acertoContas + atenciosamente;
      }
      if (ressalvas[2].checked) {
        resposta.value =
          respostaCalculosSem13 + cadastroDependentes + atenciosamente;
      }
      if (ressalvas[3].checked) {
        resposta.value = respostaCalculosSem13 + escopoInss + atenciosamente;
      }
      if (ressalvas[4].checked) {
        resposta.value =
          respostaCalculosSem13 + dadosBancarios + atenciosamente;
      }
      if (ressalvas[5].checked) {
        resposta.value = respostaCalculosSem13 + mob + atenciosamente;
      }
    }
  }

  //Cálculos sem resíduos e ressalvas
  if (situacao[1].checked) {
    //Alerta se a MR estiver zerada

    if (mr === 0) {
      alert("É necessário preencher o valor da MR do benefício.");
    }

    if (situacao13[0].checked) {
      if (ressalvas[0].checked) {
        resposta.value = semResiduosCalc13 + atenciosamente;
      }
      if (ressalvas[1].checked) {
        alert(
          "Se não existem resíduos, não existe acerto de contas a ser feito, certo?"
        );
      }
      if (ressalvas[2].checked) {
        resposta.value =
          semResiduosCalc13 + cadastroDependentes + atenciosamente;
      }
      if (ressalvas[3].checked) {
        resposta.value = semResiduosCalc13 + escopoInss + atenciosamente;
      }
      if (ressalvas[4].checked) {
        resposta.value = semResiduosCalc13 + dadosBancarios + atenciosamente;
      }
      if (ressalvas[5].checked) {
        resposta.value = semResiduosCalc13 + mob + atenciosamente;
      }
    } else {
      if (ressalvas[0].checked) {
        resposta.value = semResiduosCalcSem13 + atenciosamente;
      }
      if (ressalvas[1].checked) {
        alert(
          "Se não existem resíduos, não existe acerto de contas a ser feito, certo?"
        );
      }
      if (ressalvas[2].checked) {
        resposta.value =
          semResiduosCalcSem13 + cadastroDependentes + atenciosamente;
      }
      if (ressalvas[3].checked) {
        resposta.value = semResiduosCalcSem13 + escopoInss + atenciosamente;
      }
      if (ressalvas[4].checked) {
        resposta.value = semResiduosCalcSem13 + dadosBancarios + atenciosamente;
      }
      if (ressalvas[5].checked) {
        resposta.value = semResiduosCalcSem13 + mob + atenciosamente;
      }
    }
  }

  //Não-localizado e ressalvas
  if (situacao[2].checked) {
    if (ressalvas[0].checked) {
      resposta.value = naoLocalizado + atenciosamente;
    }
    if (ressalvas[1].checked) {
      alert(
        "Se não foi possível localizar o segurado, como os valores foram verificados?"
      );
    }
    if (ressalvas[2].checked) {
      resposta.value = naoLocalizado + cadastroDependentes + atenciosamente;
    }
    if (ressalvas[3].checked) {
      resposta.value = naoLocalizado + escopoInss + atenciosamente;
    }
    if (ressalvas[4].checked) {
      resposta.value = naoLocalizado + dadosBancarios + atenciosamente;
    }
    if (ressalvas[5].checked) {
      resposta.value = naoLocalizado + mob + atenciosamente;
    }
  }
  //Sem benefício e ressalvas
  if (situacao[3].checked) {
    if (ressalvas[0].checked) {
      resposta.value = semBeneficio + atenciosamente;
    }
    if (ressalvas[1].checked) {
      alert(
        "Se não existe benefício, não pode existir acerto de contas, certo?"
      );
    }
    if (ressalvas[2].checked) {
      resposta.value = semBeneficio + cadastroDependentes + atenciosamente;
    }
    if (ressalvas[3].checked) {
      resposta.value = semBeneficio + escopoInss + atenciosamente;
    }
    if (ressalvas[4].checked) {
      resposta.value = semBeneficio + dadosBancarios + atenciosamente;
    }
    if (ressalvas[5].checked) {
      alert(
        "Se não existe benefício, não podemos encaminhar para o MOB, certo?"
      );
    }
  }

  //Sem resíduos e ressalvas
  if (situacao[4].checked) {
    if (ressalvas[0].checked) {
      resposta.value = semResiduos + atenciosamente;
    }
    if (ressalvas[1].checked) {
      alert(
        "Se não existem resíduos, não existe acerto de contas a ser feito, certo?"
      );
    }
    if (ressalvas[2].checked) {
      resposta.value = semResiduos + cadastroDependentes + atenciosamente;
    }
    if (ressalvas[3].checked) {
      resposta.value = semResiduos + escopoInss + atenciosamente;
    }
    if (ressalvas[4].checked) {
      resposta.value = semResiduos + dadosBancarios + atenciosamente;
    }
    if (ressalvas[5].checked) {
      resposta.value = semResiduos + mob + atenciosamente;
    }
  }
}
// Final da página de Resíduos

// Início da página de Consignações
function resposta_consignacoes() {
  let orgao = document.querySelector("#consignacoes_orgao").value;

  let orgaoCopia = document.querySelector("#consignacoes_orgao_copia");

  orgaoCopia.value = orgao;

  let processo = document.querySelector("#consignacoes_processo").value;

  let email = document.querySelector("#consignacoes_email").value;

  let emailCopia = document.querySelector("#consignacoes_email_copia");

  emailCopia.value = email;

  let segurado = document.querySelector("#consignacoes_nome").value;

  let situacao = document.getElementsByClassName("radio_consignacoes");

  let ressalva = document.getElementsByClassName("ressalvaConsignacoes");

  let assunto = document.getElementById("consignacoes_assunto_email");

  let textarea = document.querySelector("#consignacoes_textarea");

  //Respostas salvas em variáveis

  const naoLocalizado = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com dados de consultas aos sistemas do INSS. Neste documento é possível constatar que não foi possível localizar o cadastro do(a) Sr.(a) ${segurado} através dos dados informados.`;

  const consignacaoAtiva = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar a seguinte situação referente os contratos efetuados entre o segurado ${segurado} e o(s) agente(s) financeiro(s):`;

  const excluidoBanco = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que o agente financeiro efetuou a exclusão da consignação no benefício do segurado ${segurado}.`;

  const excluidoInss = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, encaminhamos relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que o INSS efetuou a suspensão da consignação conforme determinação.`;

  const historicoCompleto = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível analisar o histórico completo de consignações efetuadas pelos agentes financeiros no cadastro do segurado(a) ${segurado}.`;

  const historicoEBloqueio = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento, além de ser possível analisar o histórico completo de consignações efetuadas pelos agentes financeiros, também é possível verificar que foi lançado bloqueio para que não seja mais possível lançar novas consignações no benefício do(a) segurado(a) ${segurado}.`;

  const ressalvaDadosBancarios = `\n\nRessaltamos que o INSS trata da concessão e manutenção de benefícios previdenciários, não dispondo assim dos detalhes contratuais firmados entre o segurado e o agente bancário responsável pela consignação.`;

  const ressalvaDependentes = `\n\nImportante salientar que dependentes somente são cadastrados/habilitados no INSS após aprovação de requerimento administrativo de benefício de Pensão por Morte quando ocorre o óbito do segurado, inexistindo assim um cadastro prévio de dependentes administrado pelo INSS.`;

  const ressalvaEscopoInss = `\n\nRessaltamos que o INSS é uma autarquia federal que trata somente de questões previdenciárias relacionadas ao Regime Geral de Previdência Social (RGPS), não dispondo de informações sobre outros programas de outros entes federais.`;

  const atenciosamente = `\n\nAtenciosamente,`;

  assunto.value = `Ofício - Processo ${processo} - ${segurado}`;

  //Segurado não-localizado
  if (situacao[0].checked) {
    if (ressalva[0].checked) {
      textarea.value = naoLocalizado + atenciosamente;
    }

    if (ressalva[1].checked) {
      textarea.value = naoLocalizado + ressalvaDadosBancarios + atenciosamente;
    }

    if (ressalva[2].checked) {
      textarea.value = naoLocalizado + ressalvaDependentes + atenciosamente;
    }
    if (ressalva[3].checked) {
      textarea.value = naoLocalizado + ressalvaEscopoInss + atenciosamente;
    }
  }

  //Consignação ativa
  if (situacao[1].checked) {
    if (ressalva[0].checked) {
      textarea.value = consignacaoAtiva + atenciosamente;
    }

    if (ressalva[1].checked) {
      textarea.value =
        consignacaoAtiva + ressalvaDadosBancarios + atenciosamente;
    }

    if (ressalva[2].checked) {
      textarea.value = consignacaoAtiva + ressalvaDependentes + atenciosamente;
    }
    if (ressalva[3].checked) {
      textarea.value = consignacaoAtiva + ressalvaEscopoInss + atenciosamente;
    }
  }

  //Cancelada pelo banco
  if (situacao[2].checked) {
    if (ressalva[0].checked) {
      textarea.value = excluidoBanco + atenciosamente;
    }

    if (ressalva[1].checked) {
      textarea.value = excluidoBanco + ressalvaDadosBancarios + atenciosamente;
    }

    if (ressalva[2].checked) {
      textarea.value = excluidoBanco + ressalvaDependentes + atenciosamente;
    }
    if (ressalva[3].checked) {
      textarea.value = excluidoBanco + ressalvaEscopoInss + atenciosamente;
    }
  }

  //Excluído pelo INSS
  if (situacao[3].checked) {
    if (ressalva[0].checked) {
      textarea.value = excluidoInss + atenciosamente;
    }

    if (ressalva[1].checked) {
      textarea.value = excluidoInss + ressalvaDadosBancarios + atenciosamente;
    }

    if (ressalva[2].checked) {
      textarea.value = excluidoInss + ressalvaDependentes + atenciosamente;
    }
    if (ressalva[3].checked) {
      textarea.value = excluidoInss + ressalvaEscopoInss + atenciosamente;
    }
  }

  //Histórico completo
  if (situacao[4].checked) {
    if (ressalva[0].checked) {
      textarea.value = historicoCompleto + atenciosamente;
    }

    if (ressalva[1].checked) {
      textarea.value =
        historicoCompleto + ressalvaDadosBancarios + atenciosamente;
    }

    if (ressalva[2].checked) {
      textarea.value = historicoCompleto + ressalvaDependentes + atenciosamente;
    }
    if (ressalva[3].checked) {
      textarea.value = historicoCompleto + ressalvaEscopoInss + atenciosamente;
    }
  }
  //Histórico e Bloqueio
  if (situacao[5].checked) {
    if (ressalva[0].checked) {
      textarea.value = historicoEBloqueio + atenciosamente;
    }

    if (ressalva[1].checked) {
      textarea.value =
        historicoEBloqueio + ressalvaDadosBancarios + atenciosamente;
    }

    if (ressalva[2].checked) {
      textarea.value =
        historicoEBloqueio + ressalvaDependentes + atenciosamente;
    }
    if (ressalva[3].checked) {
      textarea.value = historicoEBloqueio + ressalvaEscopoInss + atenciosamente;
    }
  }
}
//Final da página de Consignações

//Início da página de Pensão Alimentícia
function respostaPA() {
  const processo = document.querySelector("#pa_processo").value;

  const instituidor = document.querySelector("#nome_inst").value;

  const dependente1 = document.querySelector("#nome_dep_1").value;

  const tarefa = document.querySelector("#pa_tarefa").value;

  const situacao = document.getElementsByClassName("radio_pa");

  const nbImplantado = document.querySelector("#pa_nbImplantado").value;

  //variáveis relacionadas à parte das respostas
  const resposta = document.getElementById("pa_textarea");

  const assunto = document.getElementById("pa_assunto_email");

  const atenciosamente = `Atenciosamente,
  `;

  //Frases em variáveis para melhor organização;

  const faltaCpfTitular = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, informamos que não foi possível realizar a abertura da tarefa para implantação da referida Pensão Alimentícia no benefício do instituidor ${instituidor}, tendo em vista que é obrigatório informar o número de CPF do titular ${dependente1}.

Sendo assim, solicitamos que, se possível, este dado seja enviado para este e-mail para que a presente demanda possa ser cumprida de forma mais célere. \n\n${atenciosamente}`;

  const semBeneficio = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas feitas nos sistemas do INSS. Neste documento é possível verificar que não foi localizado nenhum benefício ativo no cadastro do(a) segurado(a) ${instituidor}.\n\nAtenciosamente,`;

  const faltaOutraOutraCoisa = `Falta outra outra coisa`;

  const ddb = document.querySelector("#pa_ddb").value;

  const tarefaAberta = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, informamos que foi aberta a tarefa de nº ${tarefa} para implantação da referida Pensão Alimentícia. O andamento deste protocolo poderá ser acompanhado pelo(s) interessado(s) através do site gov.br/inss, do aplicativo 'Meu INSS' ou através do telefone 135.`;

  const paJaImplantada = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, informamos que a referida Pensão Alimentícia no benefício do instituidor ${instituidor} foi implantada sob o número ${nbImplantado} desde ${ddb} conforme informações constantes no relatório anexo. \n\n${atenciosamente}`;

  const implantadaAgora = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, informamos que a referida Pensão Alimentícia foi implantada agora...`;

  const outraSituacao = `Outra situação`;

  assunto.innerHTML = `Ofício - Processo ${processo} - ${instituidor}`;

  // Fim das frases - Início dos radios inputs

  if (situacao[0].checked) {
    resposta.value = faltaCpfTitular;
  } else if (situacao[1].checked) {
    resposta.value = semBeneficio;
  } else if (situacao[2].checked) {
    resposta.value = faltaOutraOutraCoisa;
  } else if (situacao[3].checked) {
    resposta.value = tarefaAberta;
  } else if (situacao[4].checked) {
    resposta.value = paJaImplantada;
  } else if (situacao[5].checked) {
    resposta.value = implantadaAgora;
  } else if (situacao[6].checked) {
    resposta.value = outraSituacao;
  }

  // Fim dos radio inputs
}
//Final da página de P.A

//Página SEI???
function resposta_sei() {
  const nome = document.querySelector("#sei_nome").value;

  const beneficio = document.querySelector("#sei_nb").value;

  const situacao = document.getElementsByClassName("radio_sei");

  const dataAgendamento = document
    .getElementById("sei_agendamento")
    .value.split("-")
    .reverse()
    .join("/");

  const horaAgendamento = document.querySelector("#sei_horario").value;

  const aps = document.querySelector("#sei_aps").value;

  const resposta = document.querySelector("#sei_textarea");

  //Respostas em variáveis para melhor organização

  const copiaProcessoNaoLocalizado = `1. Em atenção à presente demanda acerca de cópias de processos elencados em planilha, informamos que da relação informada, apenas um processo foi localizado em arquivo. \n\n2. Sendo assim, para todos os outros casos, encaminhamos anexo com relatórios diversos acerca dos benefícios solicitados.`;

  const copiaProcessoExterno = "";

  const erroPP = `1. Trata-se de Mandado de Segurança impetrado pelo(a) segurado(a) ${nome} que não conseguiu realizar o agendamento de Perícia de Prorrogação dentro do prazo e teve seu benefício nº ${beneficio} indevidamente cessado.
  2. Situação resolvida e perícia agendada para o dia ${dataAgendamento} às ${horaAgendamento} na ${aps}.
    
  3. O benefício foi reativado e já consta o cálculo dos pagamentos pendentes conforme relatório anexo.`;

  const finalizarAnalise = `Encaminhamento de determinação judicial para cumprimento.

  1. Trata-se de Mandado de Segurança determinando a finalização da análise do benefício 7090285392 em até 30 dias após o cumprimento das exigências por parte do(a) segurado(a) Eliana dos Santos Franca.  

  2. A exigência solicitava atualização no Cadúnico, além de outros documentos complementares, e foi realizada em 21/11/2020.

  3. Em 15/01/2021 o procurador do(a) segurado(a) fez um pedido de dilação do prazo da exigência.

  4. Em 02/03/2021 o requerimento foi indeferido, tendo em vista que não houve manifestação do(a) segurado(a) referente o cumprimento da exigência pendente há mais de 100 dias.

  5. Importante ressaltar a ciência do(a) segurado(a) e/ou seu procurador, tendo em vista os constantes acessos ao processo digital registrados no sistema GET.`;

  const informacoesDossie = `Encaminhamento de determinação judicial para cumprimento.

  1. Trata-se de Mandado de Segurança impetrado pelo(a) segurado(a) ${nome} e que determina a notificação do INSS para que sejam apresentadas informações que entender necessárias.

  2. Sem mais a acrescentar, encaminhamos relatório anexo com consultas diversas aos sistemas do INSS referente a situação relatada.`;

  const analiseMedica = `Encaminhamento de determinação judicial para cumprimento.

  1. Trata-se de Mandado de Segurança impetrado pelo(a) segurado(a) ${nome}. 
    
  2. É possível verificar através de relatório anexo que a análise médica da Perícia Médica Federal foi de cessação imediata do benefício. 
    
  3. Nestes casos em que a data de cessação é a própria data da perícia, não é possível agendar prorrogação.

  4. Com a cessação do benefício, o segurado tem prazo de 30 dias de prazo para entrar com Recurso Administrativo contra a decisão e/ou terá que aguardar 30 dias para realizar um novo requerimento de benefício.`;

  const bpcDemora = `Encaminhamento de determinação judicial para cumprimento.

  1. Trata-se de Mandado de Segurança impetrado pelo(a) segurado(a) ${nome}. 
    
  2. É possível verificar através de relatório anexo que o processo de análise do benefício está em andamento e foi agendada a Avaliação Social para o dia ${dataAgendamento} às ${horaAgendamento} a ser realizada na ${aps}. 

  3. Existe o registro no processo, que devido à falta de vagas, não foi possível marcar a Perícia Médica para o mesmo dia da Avaliação Social. Por isso o servidor orienta que seja solicitado ao Assistente Social, no dia da Avaliação Social, para que seja feito o agendamento de Perícia Médica do(a) segurado(a).`;

  const outraSituacao = `Outra situação`;

  //Fim das frases - começo da lógica

  if (situacao[0].checked) {
    resposta.value = copiaProcessoNaoLocalizado;
  } else if (situacao[1].checked) {
    resposta.value = finalizarAnalise;
  } else if (situacao[2].checked) {
    resposta.value = informacoesDossie;
  } else if (situacao[3].checked) {
    resposta.value = analiseMedica;
  } else if (situacao[4].checked) {
    resposta.value = bpcDemora;
  } else if (situacao[5].checked) {
    resposta.value = outraSituacao;
  }
}
//Final da página SEI

//Início da página de Protocolo
function resposta_protocolo() {
  const processo = document.querySelector("#protocolo_processo").value;

  const nome = document.querySelector("#protocolo_nome").value;

  const situacao = document.querySelectorAll(".radio_protocolo");

  //Variáveis com os textos das respostas
  const resposta_dossie = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando cópia/dossiê relativo ao segurado ${nome} conforme determinação.`;

  const relatoriosPericia = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatórios que detalham aspectos da análise pericial relativa ao caso do(a) segurado(a) ${nome}.`;

  const resposta_em_andamento = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas aos sistemas do INSS. Neste relatório é possível verificar que o processo do segurado ${nome} está em andamento.`;

  const resposta_exigencia = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas aos sistemas do INSS. Neste relatório é possível verificar que o processo do segurado ${nome} está em exigência.`;

  const resposta_deferido = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas aos sistemas do INSS. Neste relatório é possível verificar que o processo do segurado ${nome} foi deferido.`;

  const resposta_indeferido = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, estamos encaminhando relatório com consultas aos sistemas do INSS. Neste relatório é possível verificar que o processo do segurado ${nome} foi indeferido.`;

  const mob = `Em atenção ao disposto no ofício relacionado ao processo ${processo}, informamos que o caso relativo ao segurado ${nome}, foi encaminhado ao setor de Monitoramento Operacional de Benefícios(MOB) para apuração.`;

  const ressalva1 = `\n\nImportante ressaltar que esta é a ressalva 1.`;

  const ressalva2 = `\n\nImportante ressaltar que esta é a ressalva 2.`;

  const assunto = document.querySelector("#assunto_email");

  const atenciosamente = `\n\nAtenciosamente,`;

  assunto.innerHTML = `Ofício - Processo ${processo} - ${nome}`;

  const textarea = document.querySelector("#protocolo_textarea");

  if (situacao[0].checked) {
    textarea.value = resposta_dossie + atenciosamente;
  }

  if (situacao[1].checked) {
    textarea.value = relatoriosPericia + atenciosamente;
  }

  if (situacao[2].checked) {
    textarea.value = resposta_em_andamento + atenciosamente;
  }

  if (situacao[3].checked) {
    textarea.value = resposta_exigencia + atenciosamente;
  }

  if (situacao[4].checked) {
    textarea.value = resposta_deferido + atenciosamente;
  }

  if (situacao[5].checked) {
    textarea.value = resposta_indeferido + atenciosamente;
  }

  if (situacao[6].checked) {
    textarea.value = mob + atenciosamente;
  }

  if (situacao[8].checked) {
    textarea.value += ressalva1;
  }

  if (situacao[9].checked) {
    textarea.value += ressalva2;
  }
}
// Fim da página de Procotolo

//Início da página Mandado de Segurança
function resposta_ms() {
  const nome = document.querySelector("#ms_nome").value;

  const beneficio = document.querySelector("#ms_nb").value;

  const situacao = document.getElementsByClassName("radio_ms");

  const beneficioNumero = document.querySelector("#ms_nb").value;

  const dcb = document
    .querySelector("#ms_dcb")
    .value.split("-")
    .reverse()
    .join("/");

  const data1pagamento = document
    .querySelector("#ms_data_pagamento")
    .value.split("-")
    .reverse()
    .join("/");

  const dataAtendimento = document
    .getElementById("ms_data_atendimento")
    .value.split("-")
    .reverse()
    .join("/");

  const aps_atendimento = document.querySelector("#ms_aps_atendimento").value;

  const dataAgendamento = document
    .getElementById("ms_data_agendamento")
    .value.split("-")
    .reverse()
    .join("/");

  const horaAgendamento = document.querySelector(
    "#ms_horario_agendamento"
  ).value;

  const aps_agendamento = document.querySelector("#ms_aps_agendamento").value;

  const resposta = document.querySelector("#ms_textarea");

  //Respostas em variáveis para melhor organização

  const pendenciaResolvidaComPagamento = `Encaminhamento de determinação judicial para cumprimento.

1. Trata-se de Mandado de Segurança impetrado pelo(a) segurado(a) ${nome}. 
    
2. Verifica-se que o requerimento do segurado foi concedido sob o benefício de nº ${beneficioNumero} com DCB em ${dcb} e tem o primeiro pagamento previsto para ${data1pagamento}.`;

  const pendenciaResolvida = `Encaminhamento de determinação judicial para cumprimento.

1. Trata-se de Mandado de Segurança impetrado pelo(a) segurado(a) ${nome} que relatou problemas na análise/concessão de seu benefício.\n 
2. Verifica-se através de relatório anexo que a pendência relatada foi resolvida e o requerimento do(a) segurado(a) foi deferido sob o benefício de nº ${beneficioNumero}.

4. O valor dos pagamentos e suas respectivas datas serão calculados automaticamente e poderão ser acompanhados pelo site gov.br/meuinss ou pelo aplicativo Meu INSS.`;

  const erroPP = `Encaminhamento de determinação judicial para cumprimento.

1. Trata-se de Mandado de Segurança impetrado pelo(a) segurado(a) ${nome} que não conseguiu realizar o agendamento de Perícia de Prorrogação dentro do prazo e teve seu benefício nº ${beneficio} indevidamente cessado. 
    
2. Situação resolvida e perícia agendada para o dia ${dataAgendamento} às ${horaAgendamento} na ${aps_agendamento}.
    
3. O benefício foi reativado e já consta o cálculo dos pagamentos pendentes conforme relatório anexo.`;

  const finalizarAnalise = `Encaminhamento de determinação judicial para cumprimento.

1. Trata-se de Mandado de Segurança determinando a finalização da análise do benefício 7090285392 em até 30 dias após o cumprimento das exigências por parte do(a) segurado(a) Eliana dos Santos Franca.  

2. A exigência solicitava atualização no Cadúnico, além de outros documentos complementares, e foi realizada em 21/11/2020.

3. Em 15/01/2021 o procurador do(a) segurado(a) fez um pedido de dilação do prazo da exigência.

4. Em 02/03/2021 o requerimento foi indeferido, tendo em vista que não houve manifestação do(a) segurado(a) referente o cumprimento da exigência pendente há mais de 100 dias.

5. Importante ressaltar a ciência do(a) segurado(a) e/ou seu procurador, tendo em vista os constantes acessos ao processo digital registrados no sistema GET.`;

  const informacoesDossie = `Encaminhamento de determinação judicial para cumprimento.

1. Trata-se de Mandado de Segurança impetrado pelo(a) segurado(a) ${nome} e que determina a notificação do INSS para que sejam apresentadas informações que entender necessárias.

2. Sem mais a acrescentar, encaminhamos relatório anexo com consultas diversas aos sistemas do INSS referente a situação relatada.`;

  const analiseMedica = `Encaminhamento de determinação judicial para cumprimento.

1. Trata-se de Mandado de Segurança impetrado pelo(a) segurado(a) ${nome}. 
    
2. É possível verificar através de relatório anexo que a análise médica da Perícia Médica Federal foi de cessação imediata do benefício. 
    
3. Nestes casos em que a data de cessação é a própria data da perícia, não é possível agendar prorrogação.

4. Com a cessação do benefício, o segurado tem prazo de 30 dias de prazo para entrar com Recurso Administrativo contra a decisão e/ou terá que aguardar 30 dias para realizar um novo requerimento de benefício.`;

  const periciaAgendada = `Encaminhamento de determinação judicial para cumprimento.

1. Trata-se de Mandado de Segurança impetrado pelo(a) segurado(a) ${nome} referente demora na análise do seu requerimento de Benefício de Prestação Continuada. 
    
2. É possível verificar através do relatório da tarefa que a Avaliação Social foi realizada em ${dataAtendimento}. 
    
3. Sendo assim, restou pendente a realização da Perícia Médica, e consta no processo que esta teve que ser remarcada para o dia ${dataAgendamento} às ${horaAgendamento} na ${aps_agendamento}.`;

  const exigencia = `Encaminhamento de determinação judicial para cumprimento.

1. Trata-se de Mandado de Segurança impetrado pelo(a) segurado(a) ${nome}. 
    
2. É possível verificar através de relatório anexo que o requerimento se encontra em exigência sendo necessária a complementação da documentação por parte do segurado. 
    
3. Sendo assim, o segurado tem prazo de 30 dias para apresentar a documentação solicitada no processo administrativo.`;

  const mob = `Encaminhamento de determinação judicial para cumprimento.

1. Trata-se de sentença judicial determinando que seja realizada apuração relativa aos benefícios do segurado ${nome}. 
    
2. É possível verificar através de relatório anexo que atualmente o segurado recebe benefício de Aposentadoria por Invalidez sob o número ${beneficioNumero}. 
    
3. Sendo assim, foi aberta tarefa no GET com encaminhamento para o setor de Monitoramento Operacional de Benefícios(MOB) para que seja realizada a devida apuração acerca dos fatos relatados.`;

  const outraSituacao = `Outra situação`;

  const atenciosamente = `\n\nAtenciosamente,`;

  //Fim das frases - começo da lógica

  if (situacao[0].checked) {
    resposta.value = pendenciaResolvida;
  } else if (situacao[1].checked) {
    resposta.value = erroPP;
  } else if (situacao[2].checked) {
    resposta.value = finalizarAnalise;
  } else if (situacao[3].checked) {
    resposta.value = informacoesDossie;
  } else if (situacao[4].checked) {
    resposta.value = periciaAgendada;
  } else if (situacao[5].checked) {
    resposta.value = analiseMedica;
  } else if (situacao[6].checked) {
    resposta.value = exigencia;
  } else if (situacao[7].checked) {
    resposta.value = mob;
  } else if (situacao[8].checked) {
    resposta.value = outraSituacao;
  }
}
//Final da página Mandado de Segurança
