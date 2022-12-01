import React from "react";
import Head from "next/head";
import { Profile } from "../../../components/Profile";
import styles from "./styles.module.scss";

export default function Equipe() {
  return (
    <>
      <Head>
        <title>
          Equipe | Centro Colaborador em Alimentação e Nutrição Escolar
        </title>
      </Head>
      <div className={styles.Container}>
        <h2>Equipe</h2>
        <div className={styles.Content}>
          <Profile
            img={"/images/Equipe/Liana.jpg"}
            name={"Liana Galvão"}
            title={"Coordenadora do CECANE/UFRN"}
            description={
              "Graduação em Nutrição pela Universidade Federal do Rio Grande do Norte-UFRN, especialização em Nutrição e Dietética pela Universidade do Rio de Janeiro-UNI-RIO, Mestrado em Tecnologia dos Alimentos pela Universidade Federal do Ceará-UFC e doutorado no Programa de Pós-Graduação em Ciências da Saúde pela UFRN. Atua como Professora no Departamento de Nutrição/UFRN e Coordenando atividades do CECANE/UFRN."
            }
            link={"http://lattes.cnpq.br/0535469334881890"}
          />
          <Profile
            img={"/images/Equipe/Renata.jpg"}
            name={"Renata Alexandra"}
            title={"Subcoordenadora do CECANE/UFRN"}
            description={
              "Graduação em Nutrição pela Universidade Federal de Pernambuco, mestrado e doutorado em Ciências dos Alimentos pela Universidade de São Paulo (USP). Atua como professora do Departamento de Nutrição/UFRN e coordena as atividades do CECANE/UFRN. Possui experiência na área de Nutrição, com ênfase em Alimentos e Alimentação Escolar."
            }
            link={"http://lattes.cnpq.br/6943193132756513"}
          />
          <Profile
            img={"/images/Equipe/Gerlane.jpg"}
            name={"Gerlane Karine"}
            title={"Nutricionista"}
            description={
              "Pós-graduanda em Gestão da Qualidade na Produção de Alimentos pelo Centro Universitário do Rio Grande do Norte, formada em Nutrição pela Universidade Federal do Rio Grande do Norte, possui experiência na área de Alimentação Escolar. Atua como agente do PNAE no Produto 2, que trata do Monitoramento e Assessoria às Entidades Executoras do RN."
            }
            link={"http://lattes.cnpq.br/8438162727707091"}
          />
          <Profile
            img={"/images/Equipe/Sankya.jpeg"}
            name={"Sankya Silva"}
            title={"Nutricionista"}
            description={
              "Especialista em Vigilância Sanitária e Qualidade dos Alimentos e Nutrição Esportiva, atuou na área de Nutrição clínica e esportiva, atuou como instrutora em cursos de boas práticas, e possui experiência na área de Alimentação Escolar atuando ao longo de 10 anos, como Nutricionista na gestão municipal e estadual do PNAE. Atua colaborando como Assessora técnica do CECANE UFRN."
            }
            link={"http://lattes.cnpq.br/8554437916382753"}
          />
          <Profile
            img={"/images/Equipe/Neide.jpeg"}
            name={"Neide Maria"}
            title={"Nutricionista"}
            description={
              "Especialização em Administração em Unidades de Alimentação Coletiva pela Universidade Federal do Pernambuco e Educação em Saúde pela Universidade Federal do Rio de Janeiro, possui experiência na área de Alimentação Escolar. Atua como agente do PNAE no Produto 2, que trata do Monitoramento e Assessoria às Entidades Executoras do RN."
            }
            link={"http://lattes.cnpq.br/0002584094045812"}
          />
          <Profile
            img={"/images/Equipe/Larissa.jpg"}
            name={"Larissa Mont’Alverne"}
            title={"Nutricionista"}
            description={
              "Especialista em Controle de Qualidade de Alimentos, Nutrição e Saúde pública pela UFRN; mestre em Tecnologia de Alimentos pela Universidade Federal do Ceará e doutora em Ciências da Saúde pela UFRN. Professora do Departamento de Nutrição e do Programa de Pós-Graduação em Nutrição da UFRN. Vice-coordenadora do GPAC – Grupo de Pesquisa em Alimentação Coletiva. Colaboradora do CECANE UFRN."
            }
            link={"http://lattes.cnpq.br/1066492425111929"}
          />
          <Profile
            img={"/images/Equipe/Joana.jpeg"}
            name={"Joana Barbosa"}
            title={"Contadora"}
            description={
              "Bacharel em Ciências Contábeis pela Universidade Federal do Rio Grande do Norte (UFRN), possui experiência na área de contabilidade pública e licitações. Atua colaborando com o Produto 2, que trata do monitoramento e assessoria às Entidades Executoras do estado RN na execução do PNAE"
            }
            link={"http://lattes.cnpq.br/6939356901594168"}
          />
          <Profile
            img={"/images/Equipe/Vivi.jpeg"}
            name={"Viviany Moura"}
            title={"Nutricionista"}
            description={
              "Doutoranda pelo Programa de Pós-graduação em Ciências Sociais da UFRN, onde também titulou-se como mestre (2018), Atua desde 2018 como nutricionista do Produto 3, que trata da oferta e demanda da agricultura familiar no PNAE."
            }
            link={"http://lattes.cnpq.br/4551073538164961"}
          />
          <Profile
            img={"/images/Equipe/Claudia.jpg"}
            name={"Cláudia Santos"}
            title={"Bolsista (graduação)"}
            description={
              "Graduanda em Nutrição pela Universidade Federal do Rio Grande do Norte – UFRN. Atua como bolsista de Nutrição no Centro Colaborador em Alimentação e Nutrição Escolar da Universidade Federal do Rio Grande do Norte (CECANE/UFRN)."
            }
            link={"http://lattes.cnpq.br/1115577603701132"}
          />
          <Profile
            img={"/images/Equipe/Ronisson.jpg"}
            name={"Rônisson Thomas"}
            title={"Bolsista (graduação)"}
            description={
              "Graduado em Nutrição pela Universidade Federal de Campina Grande (UFCG), Mestrando em Saúde Coletiva pela Universidade Federal do Rio Grande do Norte. Possui experiência na área de Segurança Alimentar e Nutricional e atua colaborando com todos os Produtos e atividades do CECANE/UFRN."
            }
            link={"http://lattes.cnpq.br/5660151074581962"}
          />
          <Profile
            img={"/images/Equipe/Davi.jpg"}
            name={"Davi César"}
            title={"Bolsista (graduação)"}
            description={
              "Graduadão no curso Técnico em Tecnologia da Informação no Instituto Metrópole Digital/UFRN com ênfase e Informática para Internet. Graduando no curso de Tecnologia da Informação Bacharelado, no Instituto Metrópole Digital/UFRN. Atua no suporte de TI e com o Produto 3."
            }
            link={"http://lattes.cnpq.br/4328730364293640"}
          />
          <Profile
            img={"/images/Equipe/Karen.jpg"}
            name={"Karen Sousa"}
            title={"Voluntária (graduação)"}
            description={
              "Graduanda em nutrição pela Universidade Federal do Rio Grande do Norte (UFRN). Atua colaborando com a comunicação junto dos representantes do CAE (conselho de alimentação escolar) dos municípios, tratando da oferta e demanda da agricultura familiar no PNAE."
            }
            link={"http://lattes.cnpq.br/3370415482355727"}
          />
          <Profile
            img={"/images/Equipe/Maria.jpeg"}
            name={"Maria de Fátima"}
            title={"Assessora do CECANE/UFRN"}
            description={
              "Mestre em Linguística Aplicada pela Universidade de Brasília na área de ensino e desenvolvimento da produção de textos escritos. É assessora de estudos e projetos do CECANE UFRN e atua junto ao FNDE com ações de formação e comunicação voltadas para o Conselho de Alimentação Escolar."
            }
            link={"http://lattes.cnpq.br/0736180735922247"}
          />
          <Profile
            img={"/images/Equipe/Clara.jpeg"}
            name={"Clara Pitanga"}
            title={"Contadora"}
            description={
              "Bacharel em Ciências Contábeis, possui experiência na área contábil e tributária de empresas comerciais, associações e cooperativas. Atua como agente do PNAE colaborando no Produto 2, que trata do Monitoramento e Assessoria às Entidades Executoras do  RN."
            }
            link={"http://lattes.cnpq.br/0736180735922247"}
          />
          <Profile
            img={"/images/Equipe/Clara.jpeg"}
            name={"Clara Pitanga"}
            title={"Assessora do CECANE/UFRN"}
            description={
              "Bacharel em Ciências Contábeis, possui experiência na área contábil e tributária de empresas comerciais, associações e cooperativas. Atua como agente do PNAE colaborando no Produto 2, que trata do Monitoramento e Assessoria às Entidades Executoras do  RN."
            }
            link={"http://lattes.cnpq.br/0736180735922247"}
          />
        </div>
      </div>
    </>
  );
}
