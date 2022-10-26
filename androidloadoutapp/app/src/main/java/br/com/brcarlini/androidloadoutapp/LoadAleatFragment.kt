package br.com.brcarlini.androidloadoutapp

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageButton
import androidx.navigation.fragment.findNavController
import br.com.brcarlini.androidloadoutapp.databinding.FragmentLoadAleatBinding

class LoadAleatFragment : Fragment() {

    private lateinit var binding: FragmentLoadAleatBinding

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        binding = FragmentLoadAleatBinding.inflate(layoutInflater, container, false)

        val buttonBack = binding.buttonBackLoadAleat

        buttonBack.setOnClickListener{
            findNavController().navigate(R.id.action_loadAleatFragment_to_homeFragment)
        }

        return binding.root
    }
}