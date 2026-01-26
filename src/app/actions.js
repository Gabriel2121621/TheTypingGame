"use server" //The code runs on the server
import { supabase } from "@/lib/supabaseClient";

export async function saveNewScore(fromData) {
    const username = fromData.get("username");
    const wpm = parseInt(fromData.get("wpm"));
    const accuracy = parseFloat(fromData.get("accuracy"));

    if (wpm > 250) throw new Error("Too fast");

    const { data, error } = await supabase
        .from("ranking")
        .insert([{ username, wpm, accuracy }]);

    if (error) throw new Error(error.message);

    return { succes: true};
}