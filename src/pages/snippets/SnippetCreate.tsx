import {
    Create,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Textarea
} from "@pankod/refine-chakra-ui";
import { useForm } from "@pankod/refine-react-hook-form";

export const SnippetCreate = () => {
    const {
        refineCore: { formLoading },
        saveButtonProps,
        register,
        formState: { errors },
    } = useForm();

    return (
        <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
            <FormControl mb="3" isInvalid={!!(errors as any)?.code}>
                <FormLabel>Code</FormLabel>
                <Textarea
                    {...register("code", {
                        required: "This field is required",
                    })}
                />
                <FormErrorMessage>
                    {(errors as any)?.code?.message as string}
                </FormErrorMessage>
            </FormControl>
            <FormControl mb="3" isInvalid={!!(errors as any)?.title}>
                <FormLabel>Title</FormLabel>
                <Input
                    type="text"
                    {...register("title", {
                        required: "This field is required",
                    })}
                />
                <FormErrorMessage>
                    {(errors as any)?.title?.message as string}
                </FormErrorMessage>
            </FormControl>
        </Create>
    );
};
