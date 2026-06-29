import { Minus, Plus, Trash } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../../../ui/button"
import { CartItem } from "../../../../types/user.types"
import useOrder from "../../../../hooks/useOrder"
import { useState } from "react"

const QuantityControls = ({ data, showBtn, endFunctionHandler, endUpdateQuantityHandler, className }: { data: CartItem, endUpdateQuantityHandler?: () => void, endFunctionHandler?: (v?: null) => void, showBtn?: boolean, className?: string }) => {
    const { updateQuantityMutation, removeItemMutation } = useOrder()
    const [quantity, setQuantity] = useState(data.quantity)
    return (
        <div className={`${className ?? ''} flex flex-col items-center gap-2`}>
            {showBtn ? <Link className="w-full" to={'/cart'}><Button className="lg:!w-full" variant={"outline"}>مشاهده سبد خرید</Button></Link> : ''}
            <div className={`${updateQuantityMutation.isPending ? 'opacity-35' : ""} transition-opacity border-neutral-04 flex gap-3 h-8 w-20 items-center justify-between rounded-md border px-2`}>
                <Plus className="cursor-pointer text-black/900" size={16} onClick={() => updateQuantityMutation.mutate({ id: data._id, action: 'plus' }, {
                    onSuccess: () => {
                        setQuantity(p => p + 1)
                        endUpdateQuantityHandler?.()
                    }
                })} />
                <span className="text-xs text-black/900">{quantity}</span>
                <Minus className={`${quantity == 1 ? 'pointer-events-none opacity-30' : ""} cursor-pointer text-black/900`} size={16} onClick={() => updateQuantityMutation.mutate({ id: data._id, action: 'minus' }, {
                    onSuccess: () => {
                        setQuantity(p => p - 1)
                        endUpdateQuantityHandler?.()
                    }
                })} />
            </div>
            <div onClick={() => removeItemMutation.mutate(data._id, {
                onSuccess() {
                    endFunctionHandler?.()
                },
            })} className="cursor-pointer rounded-md bg-red-600 px-3 py-2 transition-opacity hover:opacity-75">
                <Trash size={17} className="stroke-white" />
            </div>
        </div>
    )
}

export default QuantityControls