export const getSpell = async () => {
    const response = await fetch (
        "https://hp-api.onrender.com/api/spells"
    );
    const data = await response.json();
    return data;
}