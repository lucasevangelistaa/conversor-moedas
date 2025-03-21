export const fetchCotacoes = async (moedaOrigem, moedas) => {
    const url = `https://api.frankfurter.app/latest?from=${moedaOrigem}&to=${moedas.join(',')}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Erro ao buscar cotações');
        const data = await response.json();
        return data.rates;
    } catch (error) {
        throw new Error(error.message);
    }
};
