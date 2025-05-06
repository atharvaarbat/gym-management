import { AddFoodItem, FoodItemInput } from "@/action/food-item.action"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLoading } from "@/hooks/use-loading"
import React from "react"
import { toast } from "sonner"



export function CreatFoodItem() {
    const { showLoading, hideLoading} = useLoading()
    const [formState, setFormState] = React.useState<FoodItemInput>({
        name: "",
        calories: 0,
        recipe: "",
    })
      const handleInputChange = (
        e: any,
        field: keyof FoodItemInput
      ) => {
        setFormState((prev) => ({ ...prev, [field]: e }))
      }
      const handleSubmit = async () => {
        showLoading()
        if(formState.name === "" || formState.calories === null) {
          toast.error("Please fill all the required fields")
          return
        }
        if(formState.calories <= 0) {
          toast.error("Calories must be greater than zero")
          return
        }
        const response = await AddFoodItem(formState)
        if(response.id) {
          toast.success("Food item added successfully")
          hideLoading()
          return
        }
        toast.error("Failed to add food item")
        hideLoading()
        return
      }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Create</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create a food item</DialogTitle>
                    {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                        <Label>
                            Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            placeholder="Name"
                            type="text"
                            required
                            value={formState.name}
                            onChange={(e) => handleInputChange(e.target.value, "name")}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>
                            Calories <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            placeholder="Calories"
                            type="number"
                            required
                            value={formState.calories}
                            onChange={(e) => handleInputChange(e.target.value, "calories")}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>
                            Protein 
                        </Label>
                        <Input
                            placeholder="Protein"
                            type="number"
                            required
                            value={formState.protein}
                            onChange={(e) => handleInputChange(e.target.value, "protein")}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>
                            Carbs
                        </Label>
                        <Input
                            placeholder="Carbs"
                            type="number"
                            required
                            value={formState.carbs}
                            onChange={(e) => handleInputChange(e.target.value, "carbs")}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>
                            Fats 
                        </Label>
                        <Input
                            placeholder="Fats"
                            type="number"
                            required
                            value={formState.fats}
                            onChange={(e) => handleInputChange(e.target.value, "fats")}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>
                            Recipe Link 
                        </Label>
                        <Input
                            placeholder="Recipe"
                            type="text"
                            required
                            value={formState.recipe}
                            onChange={(e) => handleInputChange(e.target.value, "recipe")}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleSubmit} >Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
