import { useEffect, useState } from "react";
import { Badge, Tr, Td, HStack, VStack, Heading, Box, Text } from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Table } from "@chakra-ui/react";
import { Tbody } from "@chakra-ui/react";

const Detail = ({ pokemon }) => {
    console.log(pokemon);
    return (
        <Box>
            {pokemon && (
                <Box role="pokemon-detail">
                    {/* TODO: display pokemon name here */}
                    <Heading as="h2" size="lg">
                        {pokemon.name}
                    </Heading>
                    {/* TODO: display pokemon type here */}
                    <HStack>
                        {pokemon.types.map((listType, index) => (
                            <Badge key={index}>{listType.type.name}</Badge>
                        ))}
                    </HStack>
                    <HStack>
                        <Image src={pokemon.sprites.front_default} />
                        <Image src={pokemon.sprites.back_default} />
                        <Image src={pokemon.sprites.front_shiny} />
                        <Image src={pokemon.sprites.back_shiny} />
                    </HStack>
                    {/* TODO: render pokemon height, weight, base_experience, abilities, and stats here */}
                    <Table>
                        <Tbody>
                            <Tr>
                                <Td>Height</Td>
                                <Td>{pokemon.height}</Td>
                            </Tr>
                            <Tr>
                                <Td>Height</Td>
                                <Td>{pokemon.weight}</Td>
                            </Tr>
                            <Tr>
                                <Td>Base Experience</Td>
                                <Td>{pokemon.base_experience}</Td>
                            </Tr>
                            <Tr>
                                <Td>Abilities</Td>

                                <Td>
                                    <VStack align="start">
                                        {pokemon.abilities.map((ListAbility) => (
                                            <Text>{ListAbility.ability.name}</Text>
                                        ))}
                                    </VStack>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>Stats</Td>

                                <Td>
                                    <VStack align="start">
                                        {pokemon.stats.map((ListStat) => (
                                            <Text>{` ${ListStat.stat.name}: ${ListStat.base_stat}`}</Text>
                                        ))}
                                    </VStack>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Box>
            )}
        </Box>
    );
};
const Page = () => {
    //TODO: read pokemonId from parameter
    const pokemonId = useParams(); // TODO: replace this
    const [pokemon, setPokemon] = useState(null);

    const fetchPokemon = async (id) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const data = await response.json();
        setPokemon(data);
    };

    useEffect(() => {
        fetchPokemon(pokemonId.id);
        // TODO: answer here
    }, [pokemonId]);

    return <Detail pokemon={pokemon} />;
};

export default Page;
