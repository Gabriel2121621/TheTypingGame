"use server" //The code runs on the server
import { supabase } from "@/lib/supabaseClient";

export async function saveNewScore({ username, wpm, accuracy }) {

    // if (wpm > 250) throw new Error("Too fast, are you a bot?");
    const { data, error } = await supabase
        .from("ranking")
        .insert([{ username, wpm: parseInt(wpm), 
            accuracy: parseFloat(accuracy)}]);

    if (error) throw new Error(error.message);

    return { success: true};
}