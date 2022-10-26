package br.com.brcarlini.androidloadoutapp

import android.os.Bundle
import android.os.Handler
import android.os.Looper
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.navigation.fragment.findNavController


class openingFragment : Fragment() {


    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val view = inflater.inflate(R.layout.fragment_opening, container, false)

        Handler(Looper.myLooper()!!).postDelayed({
                                                 findNavController().navigate(R.id.action_openingFragment_to_loginFragment)
        }, 1000)

        return view
    }


}