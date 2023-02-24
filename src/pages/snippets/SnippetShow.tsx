import { useShow } from "@pankod/refine-core";
import {
    Show,
    Heading,
    NumberField,
    Button,
    TextField,
    Code
} from "@pankod/refine-chakra-ui";
import { useNavigate, NavigateFunction} from "@pankod/refine-react-router-v6";

export const SnippetShow = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const record = data?.data;

    const navigate: NavigateFunction = useNavigate();

    const handleButtonPress = (): void => {
        const state = { inputCode: record?.code };
        navigate("/dashboard", { state: state as { inputCode: string } });
      };

    return (
        <Show isLoading={isLoading}>
            <Heading as="h5" size="md" mt={4}>
                Id
            </Heading>
            <NumberField value={record?.id ?? ""} />
            <Heading as="h5" size="md" mt={4}>
                Code
            </Heading>
            <Code>{record?.code}</Code>
            <Heading as="h5" size="md" mt={4}>
                Title
            </Heading>
            <TextField value={record?.title} />
            <Button onClick={() => {handleButtonPress()}}
                            mt={4}
                            bg={'blackAlpha.800'}
                            color={'white'}
                            rounded={'full'}
                            px={6}
                            _hover={{
                                bg: 'white',
                                color: 'black',
                                rounded: 'full',
                                border: '1px',
                                borderColor: 'black',
                            }}
                        >Create Snap</Button>
        </Show>
    );
};
