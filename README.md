# Precifica Vet
# README

## **Descrição do Site**

Este site é uma ferramenta de precificação desenvolvida para ajudar empresas, especialmente clínicas e pet shops, a calcular os preços ideais de produtos e serviços. Ele considera fatores como custos fixos, custos variáveis e margem de lucro desejada, garantindo que os preços sejam sustentáveis e competitivos no mercado.

### **Funcionalidades Principais**
1. **Precificação de Serviços**: Permite inserir os custos fixos, variáveis e a margem de lucro para calcular o preço ideal de um serviço.
2. **Precificação de Produtos**: Similar à precificação de serviços, mas voltado para produtos, considerando o custo de compra.
3. **Perguntas Frequentes (FAQ)**: Explica conceitos importantes como custos fixos, variáveis e margem de lucro, além de fornecer orientações sobre como utilizar o sistema.
4. **Interface Intuitiva**: Inputs formatados para valores monetários e alertas para evitar erros de cálculo, como somar percentuais incorretamente.

---

## **Tecnologias Utilizadas**

### **Frontend**
- **HTML**: Estruturação do conteúdo do site.
- **CSS**: Estilização da interface com uso de cores vibrantes e gradientes. O design é responsivo e utiliza a fonte "Roboto" para uma melhor legibilidade.
    - Gradiente no fundo: Transição entre tons de verde.
    - Botões estilizados com bordas arredondadas e cores chamativas como dourado.
    - Layout flexível para organizar seções e componentes.

### **JavaScript**
- Manipulação da DOM para interatividade:
  - Formatação automática dos inputs monetários usando a biblioteca *Cleave.js*.
  - Validação dos dados inseridos nos campos (ex.: remoção de caracteres inválidos).
  - Cálculo dinâmico dos preços com base nas entradas fornecidas pelo usuário.
  - Alertas para evitar erros como soma de percentuais acima de 100%.

### **Bibliotecas**
- **Cleave.js**: Utilizada para formatar os campos monetários (ex.: prefixo "R$", separadores decimais e milhares).

---

## **Como Funciona o Sistema**

1. O usuário insere os valores nos campos correspondentes:
   - Custos fixos
   - Custos variáveis
   - Margem de lucro
   - Custo do serviço ou produto
2. O JavaScript calcula o preço ideal utilizando a fórmula:
   $$
   \text{Preço Ideal} = \text{Custo Total} \times \left(\frac{100}{100 - (\text{Custos Variáveis} + \text{Custos Fixos} + \text{Margem de Lucro})}\right)
   $$
3. O resultado é exibido em formato monetário brasileiro (ex.: R$ 100,00).

---

## **Estrutura do Projeto**

### Arquivos Principais
- `index.html`: Contém a estrutura principal do site, incluindo seções como FAQ e formulários para precificação[2][6].
- `style.css`: Define o estilo visual do site, como cores, fontes e layout.
- `script.js`: Gerencia a lógica dos cálculos e a interatividade com o usuário.

---

## **Notas Importantes**
- A soma dos percentuais (custos fixos, variáveis e margem) não pode exceder 100%, pois isso tornaria o cálculo inválido.
- O sistema é flexível e pode ser usado para qualquer tipo de serviço ou produto, desde que os valores inseridos sejam precisos.