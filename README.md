# Consumindo-API_B3

### Consumindo API com axios no front-end

![](https://media.discordapp.net/attachments/632579623569457152/979755075901722664/Consumindo_API-B3.gif)


Consumindo API da B3 - Bolsa de valores brasileira (https://api-cotacao-b3.labdo.it/)

Rotas disponíveis

Link	| Descrição
------| --------
api/sysinfo	| data do último pregão disponível e quantidade de cotações
api/sysinfo/dt/top/{n}	| retorna os útimos {n} pregões disponíveis
api/sysinfo/dt/top/{n}/{cd_acao}	| retorna os útimos {n} pregões disponíveis para um determinado ativo {cd_acao}
api/empresa	| lista todas as empresas monitoradas
api/empresa/group/setor_economico	| lista todas as empresas agrupadas por setor econômico
api/empresa/group/subsetor_economico	| lista todas as empresas agrupadas por subsetor econômico
api/empresa/group/segmento_economico	| lista todas as empresas agrupadas por segmento econômico
api/empresa/group/segmento_b3	| lista todas as empresas agrupadas por segmento B3
api/empresa/{id}	| lista empresa para o ID informado
api/empresa/{id}/cotacoes	| lista as cotações da empresa para o ID informado
api/empresa/{id}/cotacoes/{cod_bdi}	| lista as cotações da empresa para o ID informado, filtrando somente cotações do tipo BDI informado. Valores BDI disponíveis: 02 LOTE PADRÃO, 78 OPÇÕES DE COMPRA, 82 OPÇÕES DE VENDA
api/carteira	| lista as ações que compõem a carteira monitorada pela api (baseada na carteira IBOV)
api/carteira/{id}	| lista a ação pertencente a carteira para o ID informado
api/cotacao/{ID_cotacao}	| lista a cotação para o ID informado
api/cotacao/cd_acao/{cd_acao}	| lista as cotações para a ação informada
api/cotacao/cd_acao/{cd_acao}/{n}	| lista as cotações para a ação informada limitada a quantidade solicitada (entre 1 e 2700).
api/cotacao/dt/{dt_pregao}	| lista as cotações para a data informada: formato da data AAAAMMDD
api/cotacao/dt/{dt_pregao}/{cd_bdi}	| lista as cotações para a data informada: formato da data AAAAMMDD, filtrando somente cotações do tipo BDI informado. Valores BDI disponíveis: 02 LOTE PADRÃO, 78 OPÇÕES DE COMPRA, 82 OPÇÕES DE VENDA


Vale destacar que o autor da API, se exonerou de responsabilidade pois, Essa API possui fim estritamente acadêmico. Esses dados não constituem sugestão de investimento de nenhuma natureza.

No caso do sistema, o usuário digitará o nome da ação e recebera os valores máximos e mínimos de cada dia.


Foi utilizado o axios que é um cliente HTTP baseado-em-promessas para o node.js e para o navegador. É isomórfico (= pode rodar no navegador e no node.js com a mesma base de código). No lado do servidor usa o código nativo do node.js - o modulo http, enquanto no lado do cliente (navegador) usa XMLHttpRequests.

