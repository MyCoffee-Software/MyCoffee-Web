import React from 'react';
import * as C from './styles';
import csvIcon from './images/csv-icon.png';
import pdfIcon from './images/pdf-icon.png';

const Reports = () => {
  return (
    <C.ReportsContainer>
      <C.Title>Gerar Relatórios</C.Title>
      <C.ReportCard>
        <C.TitleContainer>
          <h2>Relatório de Produtos</h2>
        </C.TitleContainer>
        <C.ButtonsContainer>
          <C.IconButton>
            <img src={csvIcon} alt="CSV" />
          </C.IconButton>
          <C.IconButton>
            <img src={pdfIcon} alt="PDF" />
          </C.IconButton>
        </C.ButtonsContainer>
      </C.ReportCard>

      <C.ReportCard>
        <C.TitleContainer>
          <h2>Relatório de Vendas</h2>
        </C.TitleContainer>
        <C.ButtonsContainer>
          <C.IconButton>
            <img src={csvIcon} alt="CSV" />
          </C.IconButton>
          <C.IconButton>
            <img src={pdfIcon} alt="PDF" />
          </C.IconButton>
        </C.ButtonsContainer>
      </C.ReportCard>

      <C.ReportCard>
        <C.TitleContainer>
          <h2>Relatório de Planos de Assinatura</h2>
        </C.TitleContainer>
        <C.ButtonsContainer>
          <C.IconButton>
            <img src={csvIcon} alt="CSV" />
          </C.IconButton>
          <C.IconButton>
            <img src={pdfIcon} alt="PDF" />
          </C.IconButton>
        </C.ButtonsContainer>
      </C.ReportCard>
    </C.ReportsContainer>
  );
}

export default Reports;
