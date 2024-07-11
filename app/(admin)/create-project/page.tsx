"use client"

import { projectSchema } from "@/app/(admin)/create-project/schema"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { zodResolver } from "@hookform/resolvers/zod"
import { CalendarIcon, CirclePlusIcon, Trash2Icon } from "lucide-react"
import { Controller, useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"
import { ko } from "date-fns/locale"
import { formatToKRDate } from "@/lib/utils"
import createProject from "@/app/(admin)/create-project/actions"

export default function CreateArticle() {
    const {
        control,
        handleSubmit,
        register,
        setError,
        formState: { errors },
    } = useForm<z.infer<typeof projectSchema>>({
        resolver: zodResolver(projectSchema),
        defaultValues: {
            descriptions: [{ description: "" }],
            skills: [{ name: "" }],
            date: {
                from: undefined,
                to: undefined,
            },
        },
    })
    const {
        fields: descriptionsFields,
        append: appendDescription,
        remove: removeDescription,
    } = useFieldArray({
        control,
        name: "descriptions",
    })
    const {
        fields: skillsFields,
        append: appendSkill,
        remove: removeSkill,
    } = useFieldArray({
        control,
        name: "skills",
    })

    const onSubmit = handleSubmit(async (data) => {
        const formData = new FormData()
        formData.append("title", data.title)
        formData.append("from", data.date.from.toString())
        formData.append("urls", JSON.stringify(data.urls))
        formData.append("skills", JSON.stringify(data.skills))
        formData.append("descriptions", JSON.stringify(data.descriptions))
        if (data.date.to) {
            formData.append("to", data.date.to.toString())
        }

        const errors = await createProject(formData)

        if (errors) {
            for (const [field, message] of Object.entries(errors.fieldErrors)) {
                setError(field as keyof z.infer<typeof projectSchema>, {
                    message: message.join(", "),
                })
            }
        }
    })
    const onValid = async () => {
        await onSubmit()
    }

    const addDescription = () => {
        appendDescription({ description: "" })
    }

    const deleteDescription = (index: number) => {
        removeDescription(index)
    }

    const addSkill = () => {
        appendSkill({ name: "" })
    }

    const deleteSkill = (index: number) => {
        removeSkill(index)
    }

    return (
        <div>
            <form action={onValid} className="flex flex-col gap-3">
                <Label htmlFor="title">Project Title</Label>
                <Input
                    {...register("title")}
                    id="title"
                    error={errors.title?.message}
                />
                <Label htmlFor="descriptions">Description</Label>
                {descriptionsFields.map((field, index) => (
                    <div key={field.id} className="flex gap-3">
                        <Input
                            id="descriptions"
                            {...register(`descriptions.${index}.description`)}
                            error={
                                errors.descriptions?.[index]?.description
                                    ?.message
                            }
                        />
                        {index === 0 ? (
                            <Button
                                onClick={addDescription}
                                size="icon"
                                className="flex-shrink-0"
                                type="button"
                            >
                                <CirclePlusIcon className="size-5" />
                            </Button>
                        ) : (
                            <Button
                                onClick={() => deleteDescription(index)}
                                variant="destructive"
                                size="icon"
                                className="flex-shrink-0"
                                type="button"
                            >
                                <Trash2Icon className="size-5" />
                            </Button>
                        )}
                    </div>
                ))}
                <Controller
                    name="date"
                    control={control}
                    render={({ field }) => (
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button className="w-full" type="button">
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {field.value.from ? (
                                        <span>
                                            {formatToKRDate(field.value.from)}~
                                            {field.value.to
                                                ? formatToKRDate(field.value.to)
                                                : "진행 중"}
                                        </span>
                                    ) : (
                                        <span>
                                            {errors.date?.from?.message ??
                                                "Select Date"}
                                        </span>
                                    )}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto">
                                <Calendar
                                    initialFocus
                                    mode="range"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    numberOfMonths={2}
                                    locale={ko}
                                />
                            </PopoverContent>
                        </Popover>
                    )}
                />
                <Label htmlFor="blog">Blog URL</Label>
                <Input {...register("urls.blog")} id="blog" />
                <Label htmlFor="github">Github URL</Label>
                <Input {...register("urls.github")} id="github" />
                <Label htmlFor="site">Site URL</Label>
                <Input {...register("urls.site")} id="site" />
                <Label htmlFor="skills">Skill</Label>
                {skillsFields.map((field, index) => (
                    <div key={field.id} className="flex gap-3">
                        <Input
                            {...register(`skills.${index}.name`)}
                            id="skills"
                            error={errors.skills?.[index]?.name?.message}
                        />
                        {index === 0 ? (
                            <Button
                                onClick={addSkill}
                                size="icon"
                                className="flex-shrink-0"
                                type="button"
                            >
                                <CirclePlusIcon className="size-5" />
                            </Button>
                        ) : (
                            <Button
                                onClick={() => deleteSkill(index)}
                                variant="destructive"
                                size="icon"
                                className="flex-shrink-0"
                                type="button"
                            >
                                <Trash2Icon className="size-5" />
                            </Button>
                        )}
                    </div>
                ))}
                <Button type="submit">프로젝트 생성하기</Button>
            </form>
        </div>
    )
}
